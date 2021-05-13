import clsx from 'clsx';
import React from 'react';
import {UserIcon} from '~/components/atoms/UserIcon';

export const Profile: React.VFC<{
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
}> = ({className, displayName, uniqueName, picture}) => {
  return (
    <section
      className={clsx(
        'px-4',
        'py-2',
        'flex',
        'bg-white',
        'shadow-sm',
        'rounded-sm',
      )}
    >
      <div className={clsx('flex', 'items-center', 'justify-center')}>
        <div className={clsx('w-16', 'h-16')}>
          <UserIcon {...{displayName, picture}} />
        </div>
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
        <h1 className={clsx('text-lg', 'font-bold')}>{displayName}</h1>
        <span className={clsx('text-gray-500')}>@{uniqueName}</span>
      </div>
    </section>
  );
};
