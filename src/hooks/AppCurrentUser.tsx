import {useUser} from '@auth0/nextjs-auth0';
import React, {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useCurrentUserLazyQuery} from '~/graphql/apollo';
import {stateCurrentUser} from './useCurrentUser';

export const AppUser = () => {
  const {user: auth0User, isLoading: auth0Loading} = useUser();
  const [loadCurrentUser, {data}] = useCurrentUserLazyQuery();

  const currentUser = useRecoilValue(stateCurrentUser);
  const setCurrentUser = useSetRecoilState(stateCurrentUser);

  useEffect(() => {
    if (
      !currentUser.loading &&
      !auth0Loading &&
      Boolean(auth0User) &&
      'currentUser' in currentUser &&
      !currentUser.currentUser
    ) {
      loadCurrentUser();
      setCurrentUser({loading: true});
    }
  }, [auth0Loading, currentUser, loadCurrentUser, setCurrentUser, auth0User]);

  useEffect(() => {
    if (data?.currentUser) {
      setCurrentUser({loading: false, currentUser: {id: data.currentUser.id}});
    } else {
      setCurrentUser({loading: false, currentUser: null});
    }
  }, [data, setCurrentUser]);

  return <></>;
};
