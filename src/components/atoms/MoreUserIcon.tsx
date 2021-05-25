import React from 'react';
import {tw} from 'twind';
import {IconMore} from './Icon';

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
    <IconMore
      className={tw('text-white', 'text-sm', 'font-bold', 'leading-none')}
    />
  </div>
);
