import clsx from 'clsx';
import React from 'react';
import {
  BlockDescription,
  BlockDetails,
  BlockFollowingUsers,
  BlockHostingUser,
  BlockMinutes,
} from '~/components/molecules/SpaceBlocks';
import {FollowButton} from '../FollowButton';

export type ComponentProps = {
  className?: string;
  title: string;
  description?: string;
  minutesUrl?: string;

  finished: boolean;
  openDate: string;
  hostedUser: {uniqueName: string; displayName: string; picture: string};
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  description,
  minutesUrl,
  title,
  finished,
  openDate,
  hostedUser,
  followingUsers,
}) => (
  <div
    className={clsx(
      className,
      'bg-white',
      'px-6',
      'py-4',
      'rounded-md',
      'shadow-md',
    )}
  >
    <p className={clsx('text-2xl', 'font-bold')}>{title}</p>
    <BlockDetails
      className={clsx('mt-2')}
      {...{
        openDate,
        ...(finished ? {finished} : {}),
      }}
    />
    {!finished && <FollowButton className={clsx('mt-4', 'w-full')} />}
    {description && (
      <BlockDescription className={clsx('mt-4')} {...{description}} />
    )}
    {minutesUrl && <BlockMinutes className={clsx('mt-4')} {...{minutesUrl}} />}
    <BlockHostingUser className={clsx('mt-4')} {...{user: hostedUser}} />
    <BlockFollowingUsers
      className={clsx('mt-4')}
      {...{users: followingUsers.users, hasMore: followingUsers.hasMore}}
    />
  </div>
);
