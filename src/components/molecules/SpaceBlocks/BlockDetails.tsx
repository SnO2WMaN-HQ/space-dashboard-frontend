import {
  faCalendarAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {DateText} from '~/components/atoms/DateText';

export const BlockDetails: React.VFC<
  {
    className?: string;
    openDate: string;
  } & ({finished: true} | {})
> = ({className, openDate, ...props}) => (
  <div className={clsx(className, 'grid', 'grid-cols-2', 'gap-y-2')}>
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
    {'finished' in props && (
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
);
