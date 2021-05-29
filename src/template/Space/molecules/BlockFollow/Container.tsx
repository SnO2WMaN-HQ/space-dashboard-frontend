import React from 'react';
import {useCurrentUser} from '~/hooks/useCurrentUser';
import {FollowButton} from '../FollowButton';
import {Component} from './Component';

export const Container: React.VFC<{
  className?: string;
  id: string;
}> = ({...props}) => {
  const state = useCurrentUser();

  return (
    <Component
      {...props}
      {...(state.loading
        ? {loading: true}
        : {
            loading: false,
            requireLogin: Boolean(state.status !== 'registered'),
          })}
      Follow={FollowButton}
    />
  );
};
