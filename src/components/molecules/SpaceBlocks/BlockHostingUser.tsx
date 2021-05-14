import clsx from 'clsx';
import React from 'react';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const BlockHostingUser: React.VFC<{
  className?: string;
  user: {uniqueName: string; displayName: string; picture: string};
}> = ({className, user}) => (
  <div className={clsx(className)}>
    <p className={clsx('font-bold')}>ホスト</p>
    <div className={clsx('mt-2', 'flex', 'px-0', 'sm:px-2')}>
      <div className={clsx('w-16', 'h-16')}>
        <UserIconLink
          {...{
            uniqueName: user.uniqueName,
            displayName: user.displayName,
            picture: user.picture,
          }}
        />
      </div>
      <div
        className={clsx(
          'ml-4',
          'flex-grow',
          'flex',
          'flex-col',
          'justify-center',
        )}
      >
        <span className={clsx('text-lg', 'font-bold')}>{user.displayName}</span>
        <UniqueName
          className={clsx('text-gray-500', 'truncate')}
          uniqueName={user.uniqueName}
        />
      </div>
    </div>
  </div>
);
