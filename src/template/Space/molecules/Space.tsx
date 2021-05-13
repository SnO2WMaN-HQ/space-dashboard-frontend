import {
  faCalendarAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {DateText} from '~/components/atoms/DateText';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserIconLink} from '~/components/atoms/UserIconLink';
import {Users} from './Users';

export const Space: React.VFC<{
  className?: string;
  title: string;
  description?: string;
  minutesUrl?: string;

  finished: boolean;

  openDate: string;

  hostedUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
  followingUsers: {
    nodes: {uniqueName: string; displayName: string; picture: string}[];
    count: number;
    hasMore: boolean;
  };
}> = ({
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
    <h1 className={clsx('text-2xl', 'font-bold')}>{title}</h1>
    <div className={clsx('mt-2', 'grid', 'grid-cols-2', 'gap-y-2')}>
      <div className={clsx('col-start-1', 'flex', 'items-center')}>
        <FontAwesomeIcon
          fixedWidth
          className={clsx('text-sm', 'text-gray-400')}
          icon={faCalendarAlt}
        />
        <DateText
          className={clsx('ml-1', 'text-sm', 'text-gray-500')}
          date={openDate}
        />
      </div>
      {finished && (
        <div className={clsx('col-start-1', 'flex', 'items-center')}>
          <FontAwesomeIcon
            fixedWidth
            className={clsx('text-sm', 'text-red-400')}
            icon={faExclamationCircle}
          />
          <span className={clsx('ml-1', 'text-sm', 'text-red-500')}>
            すでに終了
          </span>
        </div>
      )}
    </div>
    {description && (
      <div className={clsx('mt-4')}>
        <h2 className={clsx('font-bold')}>説明文</h2>
        <p className={clsx('mt-2')}>{description}</p>
      </div>
    )}
    {minutesUrl && (
      <div className={clsx('mt-4')}>
        <h2 className={clsx('font-bold')}>議事録</h2>
        <p className={clsx('mt-2', 'block', 'truncate')}>
          <a className={clsx('text-blue-400', 'underline')} href={minutesUrl}>
            {minutesUrl}
          </a>
        </p>
      </div>
    )}
    <div className={clsx('mt-4')}>
      <h2 className={clsx('font-bold')}>ホスト</h2>
      <div className={clsx('mt-2', 'flex', 'px-0', 'sm:px-2')}>
        <div className={clsx('w-16', 'h-16')}>
          <UserIconLink
            {...{
              uniqueName: hostedUser.uniqueName,
              displayName: hostedUser.displayName,
              picture: hostedUser.picture,
            }}
          />
        </div>
        <div
          className={clsx(
            'ml-2',
            'flex-grow',
            'flex',
            'flex-col',
            'justify-center',
          )}
        >
          <span className={clsx('text-lg', 'font-bold')}>
            {hostedUser.displayName}
          </span>
          <UniqueName
            className={clsx('text-gray-500', 'truncate')}
            uniqueName={hostedUser.uniqueName}
          />
        </div>
      </div>
    </div>
    <div className={clsx('mt-4')}>
      <h2 className={clsx('font-bold')}>気になっているアカウント</h2>
      <Users
        className={clsx('mt-2')}
        users={followingUsers.nodes}
        usersCount={followingUsers.count}
        hasMore={followingUsers.hasMore}
      />
    </div>
  </div>
);
