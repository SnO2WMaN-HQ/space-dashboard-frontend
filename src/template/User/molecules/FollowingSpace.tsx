import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {
  BlockDetails,
  BlockFollowingUsers,
  BlockHostingUser,
} from '~/components/molecules/SpaceBlocks';

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
    <p>
      <NextLink href={`/spaces/${id}`}>
        <a className={clsx('text-lg', 'font-bold')}>{title}</a>
      </NextLink>
    </p>
    <BlockDetails className={clsx('mt-1')} {...{openDate}} />
    <BlockHostingUser className={clsx('mt-4')} {...{user: hostedUser}} />
    <BlockFollowingUsers
      className={clsx('mt-4')}
      {...{users: followingUsers.users, hasMore: followingUsers.hasMore}}
    />
  </div>
);
