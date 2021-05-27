import React from 'react';
import {useAuthenticated} from '~/hooks/useCurrentUser';
import {Component} from './Component';

export const Container: React.VFC<{
  className?: string;
  id: string;
}> = ({...props}) => {
  const currentUser = useAuthenticated();

  return (
    <Component
      {...props}
      {...{
        requireLogin: Boolean(currentUser),
      }}
    />
  );
};
