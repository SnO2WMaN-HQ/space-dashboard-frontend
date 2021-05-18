import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({children, className}) => {
  return (
    <main
      className={clsx(
        className,
        'bg-gray-200',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
      )}
    >
      <FontAwesomeIcon
        className={clsx('text-blue-500', 'text-6xl')}
        icon={faCircleNotch}
        spin
      />
      <span
        className={clsx(
          'mt-2',
          'text-sm',
          'tracking-wider',
          'text-gray-600',
          'font-bold',
        )}
      >
        ロード中です
      </span>
    </main>
  );
};
