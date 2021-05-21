import {useUser} from '@auth0/nextjs-auth0';
import {useEffect} from 'react';
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {useCurrentUserLazyQuery} from '~/graphql/apollo';

export type CurrentUser = {id: string};
export const stateCurrentUser = atom<null | CurrentUser>({
  key: 'CurrentUser',
  default: null,
});

export type State =
  | {loading: true}
  | {loading: false; registered: false}
  | {loading: false; registered: true};
export const useCurrentUser = (): State => {
  const {user, isLoading: auth0Loading} = useUser();
  const [loadCurrentUser, {data, called: apiCalled, loading: apiLoading}] =
    useCurrentUserLazyQuery();

  const currentUser = useRecoilValue(stateCurrentUser);
  const setCurrentUser = useSetRecoilState(stateCurrentUser);

  useEffect(() => {
    if (!currentUser && !auth0Loading && Boolean(user)) loadCurrentUser();
  }, [auth0Loading, user, currentUser, loadCurrentUser]);

  useEffect(() => {
    if (data?.currentUser && data.currentUser !== null)
      setCurrentUser(data.currentUser);
  }, [data, setCurrentUser]);

  if (
    apiCalled &&
    !apiLoading &&
    data?.currentUser &&
    data.currentUser !== null
  ) {
    return {loading: false, registered: true};
  } else if (apiCalled && !apiLoading && !data?.currentUser) {
    return {loading: false, registered: false};
  } else return {loading: true};
};
