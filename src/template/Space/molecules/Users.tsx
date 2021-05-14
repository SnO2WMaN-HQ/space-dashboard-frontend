import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const More: React.VFC<{className?: string}> = ({className}) => (
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
    <FontAwesomeIcon
      icon={faEllipsisH}
      fixedWidth
      className={clsx('text-white', 'text-sm', 'font-bold', 'leading-none')}
    />
  </div>
);

export const Users: React.VFC<{
  className?: string;
  users: {uniqueName: string; displayName: string; picture: string}[];
  hasMore: boolean;
}> = ({className, users, hasMore}) => (
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
        <More className={clsx('w-8', 'h-8')} />
      </div>
    )}
  </div>
);
