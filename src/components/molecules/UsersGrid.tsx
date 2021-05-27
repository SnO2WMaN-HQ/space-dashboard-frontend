import React from 'react';
import {tw} from 'twind';

export const UsersGrid: React.VFC<{
  className?: string;
  hasMore: boolean;
  users: {uniqueName: string; displayName: string; picture: string}[];

  UserIcon: React.VFC<{
    className?: string;
    uniqueName: string;
    displayName: string;
    picture: string;
  }>;
  MoreUserIcon: React.VFC<{
    className?: string;
  }>;
}> = ({className, hasMore, users, UserIcon, MoreUserIcon}) => (
  <div className={tw(className, ['grid'])}>
    {users.map(({picture, uniqueName, displayName}) => (
      <div
        key={uniqueName}
        className={tw('flex', 'justify-center', 'items-center')}
      >
        <UserIcon className={tw()} {...{uniqueName, displayName, picture}} />
      </div>
    ))}
    {hasMore && (
      <div className={tw('flex', 'justify-center', 'items-center')}>
        <MoreUserIcon className={tw()} />
      </div>
    )}
  </div>
);
