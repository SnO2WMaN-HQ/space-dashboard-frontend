import {useUser} from '@auth0/nextjs-auth0';
import {useEffect} from 'react';
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {useCurrentUserLazyQuery} from '~/graphql/apollo';

export type CurrentUser = {id: string};
export const stateCurrentUser = atom<null | CurrentUser>({
  key: 'CurrentUser',
  default: null,
});

export const useCurrentUser = () => {
  const {user, isLoading: auth0Loading} = useUser();
  const [loadCurrentUser, {data, called, loading: apiLoading}] =
    useCurrentUserLazyQuery();

  const currentUser = useRecoilValue(stateCurrentUser);
  const setCurrentUser = useSetRecoilState(stateCurrentUser);

  useEffect(() => {
    if (!currentUser && !auth0Loading && Boolean(user) && !called)
      loadCurrentUser();
  }, [auth0Loading, user, called, currentUser, loadCurrentUser]);

  useEffect(() => {
    if (!apiLoading && !data?.currentUser) {
      setCurrentUser(null);
    }
    if (!apiLoading && data?.currentUser) {
      setCurrentUser({id: data.currentUser.id});
    }
  }, [data, apiLoading, setCurrentUser]);

  return {currentUser, loading: apiLoading || auth0Loading};
};
