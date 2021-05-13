import clsx from 'clsx';
import React from 'react';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const More: React.VFC<{className?: string; more: number}> = ({
  className,
  more,
}) => (
  <div
    className={clsx(
      className,
      'flex',
      'items-center',
      'justify-center',
      'select-none',
      'cursor-pointer',
      'bg-gray-400',
      'rounded-full',
    )}
  >
    <span
      className={clsx('text-white', 'text-sm', 'font-bold', 'leading-none')}
    >
      +{more}
    </span>
  </div>
);

export const Users: React.VFC<{
  className?: string;
  users: {uniqueName: string; displayName: string; picture: string}[];
  usersCount: number;
  hasMore: boolean;
}> = ({className, users, usersCount, hasMore}) => (
  <div
    className={clsx(
      className,
      'grid',
      'grid-cols-6',
      'sm:grid-cols-8',
      'md:grid-cols-12',
      'gap-y-2',
    )}
  >
    {users.map(({picture, uniqueName, displayName}) => (
      <div
        key={uniqueName}
        className={clsx('flex', 'justify-center', 'items-center')}
      >
        <UserIconLink
          className={clsx('w-8', 'h-8')}
          {...{uniqueName, displayName, picture}}
        />
      </div>
    ))}
    {hasMore && (
      <div className={clsx('flex', 'justify-center', 'items-center')}>
        <More className={clsx('w-8', 'h-8')} more={usersCount - users.length} />
      </div>
    )}
  </div>
);
