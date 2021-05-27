import React from 'react';
import {tw} from 'twind';
import {DisplayName} from '~/components/atoms/DisplayName';
import {MoreUserIcon} from '~/components/atoms/MoreUserIcon';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserPictureLink} from '~/components/atoms/UserPictureLink';
import {ProfileSet} from '~/components/molecules/ProfileSet';
import {SpaceCardFrame} from '~/components/molecules/SpaceCardFrame';
import {UsersGrid} from '~/components/molecules/UsersGrid';

export const FollowingSpace: React.VFC<{
  className?: string;
  id: string;
  title: string;
  openDate: string;
  hostUser: {uniqueName: string; displayName: string; picture: string};
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
}> = ({className, ...props}) => (
  <SpaceCardFrame
    className={tw(className, ['py-4', 'px-6'])}
    HostUser={FollowingSpaceHostBlock}
    FollowingUsers={FollowingSpaceFollowingBlock}
    {...props}
  />
);

export const FollowingSpaceHostBlock: React.VFC<{
  className?: string;
  user: {uniqueName: string; displayName: string; picture: string};
}> = ({className, ...props}) => (
  <ProfileSet
    className={tw(className)}
    UserIcon={({className, ...props}) => (
      <UserPictureLink className={tw(className, 'w-12', 'h-12')} {...props} />
    )}
    DisplayName={({className, ...props}) => (
      <DisplayName className={tw(className, ['text-xl'])} {...props} />
    )}
    UniqueName={({className, ...props}) => (
      <UniqueName
        className={tw(className, ['text-sm', 'md:text-base'])}
        {...props}
      />
    )}
    {...props}
  />
);

export const FollowingSpaceFollowingBlock: React.VFC<{
  className?: string;
  hasMore: boolean;
  users: {uniqueName: string; displayName: string; picture: string}[];
}> = ({className, ...props}) => (
  <UsersGrid
    {...props}
    className={tw(className, [['grid-cols-6', 'sm:grid-cols-8'], 'gap-y-4'])}
    UserIcon={({className, ...props}) => (
      <UserPictureLink className={tw(className, 'w-8', 'h-8')} {...props} />
    )}
    MoreUserIcon={({className, ...props}) => (
      <MoreUserIcon className={tw(className, 'w-8', 'h-8')} {...props} />
    )}
  />
);
