import clsx from 'clsx';
import React from 'react';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserIcon} from '~/components/atoms/UserIcon';

export const SectionProfile: React.VFC<{
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
}> = ({className, displayName, uniqueName, picture}) => {
  return (
    <section
      className={clsx(
        className,
        'px-4',
        'py-2',
        'bg-white',
        'shadow-sm',
        'rounded-sm',
      )}
    >
      <p className={clsx('text-xl', 'font-bold')}>プロフィール</p>
      <div className={clsx('mt-2', 'flex')}>
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
          <span className={clsx('text-lg', 'font-bold')}>{displayName}</span>
          <UniqueName
            className={clsx('text-gray-500')}
            uniqueName={uniqueName}
          />
        </div>
      </div>
    </section>
  );
};
