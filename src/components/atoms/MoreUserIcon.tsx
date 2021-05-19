import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export const MoreUserIcon: React.VFC<{className?: string}> = ({className}) => (
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
