import React from 'react';
import {tw} from 'twind';
import {
  BlockDetails,
  BlockFollowingUsers,
  BlockHostUser,
  BlockTitle,
} from '~/components/molecules/SpaceBlocks';
import {SpaceFrame} from './HostedSpace';

export const FollowingSpace: React.VFC<{
  className?: string;
  id: string;
  title: string;
  openDate: string;
  hostedUser: {uniqueName: string; displayName: string; picture: string};
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
}> = ({className, id, title, openDate, hostedUser, followingUsers}) => (
  <SpaceFrame
    className={tw(
      className,
      'bg-white',
      'px-4',
      'py-3',
      'rounded-md',
      'shadow-md',
    )}
  >
    <BlockTitle className={tw()} {...{id, title}} />
    <BlockDetails className={tw('mt-1')} {...{openDate}} />
    <BlockHostUser className={tw('mt-4')} {...{user: hostedUser}} />
    <BlockFollowingUsers
      className={tw('mt-4')}
      {...{users: followingUsers.users, hasMore: followingUsers.hasMore}}
    />
  </SpaceFrame>
);
