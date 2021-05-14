import clsx from 'clsx';
import React from 'react';
import {HostSpace} from '../../molecules/HostedSpace';

export type ComponentProps = {
  className?: string;
  spaces: {
    id: string;
    title: string;
    openDate: string;
    followingUsers: {
      hasMore: boolean;
      users: {
        uniqueName: string;
        displayName: string;
        picture: string;
      }[];
    };
  }[];
  pageInfo: {hasMore: boolean};
};
export const Component: React.VFC<ComponentProps> = ({className, spaces}) => {
  return (
    <section
      className={clsx(
        className,
        'bg-gray-50',
        'px-2',
        'py-4',
        'rounded-sm',
        'shadow-sm',
      )}
    >
      <p className={clsx('px-2', 'font-bold')}>ホストする予定のスペース</p>
      <div className={clsx('mt-2', 'flex', 'flex-col', 'w-full', 'space-y-4')}>
        {spaces.map(({id, ...props}) => (
          <HostSpace className={clsx('w-full')} key={id} {...{id, ...props}} />
        ))}
      </div>
    </section>
  );
};
