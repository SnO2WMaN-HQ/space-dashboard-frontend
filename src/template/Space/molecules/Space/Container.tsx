import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  id: string;
  title: string;
  description?: string;
  minutesUrl?: string;
  finished: boolean;
  openDate: string;
  hostUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
  followingUsers: {
    pageInfo: {hasMore: boolean; endCursor?: string};
    users: {
      uniqueName: string;
      displayName: string;
      picture: string;
    }[];
  };
};

export const Container: React.VFC<ContainerProps> = ({
  followingUsers,
  ...props
}) => {
  return (
    <Component
      {...props}
      {...{
        followingUsers: {
          users: followingUsers.users,
          hasMore: followingUsers.pageInfo.hasMore,
        },
      }}
    />
  );
};
