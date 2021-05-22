import React from 'react';
import {tw} from 'twind';
import {
  BlockDescription,
  BlockDetails,
  BlockFollowingUsers,
  BlockHostUser,
  BlockMinutes,
  BlockTitle,
} from '~/components/molecules/SpaceBlocks';
import {FollowButton} from '../FollowButton';

export type ComponentProps = {
  className?: string;
  id: string;

  title: string;
  description?: string;
  minutesUrl?: string;

  finished: boolean;
  openDate: string;
  hostUser: {uniqueName: string; displayName: string; picture: string};
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  description,
  minutesUrl,
  title,
  finished,
  openDate,
  hostUser,
  followingUsers,
}) => (
  <div
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
    <BlockDetails
      className={tw('mt-2')}
      {...{
        openDate,
        ...(finished ? {finished} : {}),
      }}
    />
    {!finished && <FollowButton className={tw('mt-4', 'w-full')} />}
    {description && (
      <BlockDescription className={tw('mt-4')} {...{description}} />
    )}
    {minutesUrl && <BlockMinutes className={tw('mt-4')} {...{minutesUrl}} />}
    <BlockHostUser className={tw('mt-4')} {...{user: hostUser}} />
    <BlockFollowingUsers
      className={tw('mt-4')}
      {...{users: followingUsers.users, hasMore: followingUsers.hasMore}}
    />
  </div>
);
