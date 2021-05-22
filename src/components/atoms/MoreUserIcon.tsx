import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {tw} from 'twind';

export const MoreUserIcon: React.VFC<{className?: string}> = ({className}) => (
  <div
    className={tw(
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
      className={tw('text-white', 'text-sm', 'font-bold', 'leading-none')}
    />
  </div>
);
