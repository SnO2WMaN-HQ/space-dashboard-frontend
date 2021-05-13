import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {DateText} from '~/components/atoms/DateText';
import {Users} from '~/template/Space/molecules/Users';

export const Space: React.VFC<{
  className?: string;
  id: string;
  title: string;
  openDate: string;
  followingUsers: {
    nodes: {uniqueName: string; displayName: string; picture: string}[];
    count: number;
    hasMore: boolean;
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
    <NextLink href={`/spaces/${id}`}>
      <a className={clsx('text-lg', 'font-bold')}>{title}</a>
    </NextLink>
    <div className={clsx('mt-1', 'grid', 'grid-cols-2')}>
      <div className={clsx('col-start-1', 'flex', 'items-center')}>
        <FontAwesomeIcon
          className={clsx('text-sm', 'text-gray-400')}
          icon={faCalendarAlt}
        />
        <DateText
          className={clsx('ml-1', 'text-sm', 'text-gray-500')}
          date={openDate}
        />
      </div>
    </div>
    <Users
      className={clsx('mt-4')}
      users={followingUsers.nodes}
      usersCount={followingUsers.count}
      hasMore={followingUsers.hasMore}
    />
  </div>
);
