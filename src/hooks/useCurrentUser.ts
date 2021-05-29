import {atom, useRecoilValue} from 'recoil';

export type CurrentUser = {id: string};
export const stateCurrentUser = atom<
  | {loading: false}
  | {loading: true}
  | {loading: false; currentUser: CurrentUser}
  | {loading: false; currentUser: null}
>({
  key: 'CurrentUser',
  default: {loading: false},
});

export const useCurrentUser = ():
  | {loading: true}
  | {loading: false; status: 'unauthenticated' | 'unregistered'}
  | {loading: false; status: 'registered'; currentUser: CurrentUser} => {
  const {loading, ...state} = useRecoilValue(stateCurrentUser);
  if (loading)
    return {
      loading,
    };
  else if ('currentUser' in state && state.currentUser !== null)
    return {
      loading: false,
      status: 'registered',
      currentUser: state.currentUser,
    };
  else if ('currentUser' in state && state.currentUser === null)
    return {
      loading: false,
      status: 'unregistered',
    };
  else
    return {
      loading: false,
      status: 'unauthenticated',
    };
};
