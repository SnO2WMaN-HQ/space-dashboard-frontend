import clsx from 'clsx';
import React from 'react';
import {
  BlockFollowingUsers,
  BlockTitle,
} from '~/components/molecules/SpaceBlocks';
import {BlockDetails} from '~/components/molecules/SpaceBlocks/BlockDetails';

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
  <div
    className={clsx(
      className,
      'bg-white',
      'px-4',
      'py-3',
      'rounded-md',
      'shadow-md',
    )}
  >
    <BlockTitle className={clsx()} {...{id, title}} />
    <BlockDetails className={clsx('mt-1')} {...{openDate}} />
    <BlockFollowingUsers
      className={clsx('mt-4')}
      {...{users: followingUsers.users, hasMore: followingUsers.hasMore}}
    />
  </div>
);
