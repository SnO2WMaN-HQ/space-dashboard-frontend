import {useEffect} from 'react';
import {useEffectOnce} from 'react-use';
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {useCurrentUserLazyQuery} from '~/graphql/apollo';

export type CurrentUser = {
  id: string;
};
export const stateCurrentUser = atom<null | CurrentUser>({
  key: 'CurrentUser',
  default: null,
});

export const useCurrentUser = () => {
  const [loadCurrentUser, {data, loading, error}] = useCurrentUserLazyQuery();

  const currentUser = useRecoilValue(stateCurrentUser);
  const setCurrentUser = useSetRecoilState(stateCurrentUser);

  useEffectOnce(() => {
    if (!currentUser) loadCurrentUser();
  });

  useEffect(() => {
    if (!loading && data?.currentUser && data.currentUser === null) {
      setCurrentUser(null);
    }
    if (!loading && data?.currentUser && data.currentUser) {
      setCurrentUser({id: data.currentUser.id});
    }
  }, [data, loading, setCurrentUser]);

  return {currentUser, loading, error};
};
