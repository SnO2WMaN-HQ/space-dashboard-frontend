import React from 'react';
import {tw} from 'twind';
import {SpaceCardFrame} from '~/components/molecules/SpaceCardFrame';
import {FollowingSpaceFollowingBlock} from './FollowingSpace';

export const HostedSpace: React.VFC<{
  className?: string;
  id: string;
  title: string;
  openDate: string;
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
}> = ({className, ...props}) => (
  <SpaceCardFrame
    className={tw(className, ['py-4', 'px-6'])}
    FollowingUsers={FollowingSpaceFollowingBlock}
    {...props}
  />
);
