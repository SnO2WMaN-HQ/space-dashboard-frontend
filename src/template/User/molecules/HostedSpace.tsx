import React from 'react';
import {tw} from 'twind';
import {
  BlockFollowingUsers,
  BlockTitle,
} from '~/components/molecules/SpaceBlocks';
import {BlockDetails} from '~/components/molecules/SpaceBlocks/BlockDetails';
import {SpaceFrame} from '../atoms/SpaceFrame';

export const HostSpace: React.VFC<{
  className?: string;
  id: string;
  title: string;
  openDate: string;
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
}> = ({className, id, title, openDate, followingUsers}) => (
  <SpaceFrame className={tw(className)}>
    <BlockTitle className={tw()} {...{id, title}} />
    <BlockDetails className={tw('mt-1')} {...{openDate}} />
    <BlockFollowingUsers
      className={tw('mt-4')}
      {...{users: followingUsers.users, hasMore: followingUsers.hasMore}}
    />
  </SpaceFrame>
);
