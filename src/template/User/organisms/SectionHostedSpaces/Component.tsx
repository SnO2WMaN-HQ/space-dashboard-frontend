import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
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
  const {t} = useTranslation('user');

  return (
    <section
      className={tw(
        className,
        'bg-gray-50',
        'px-2',
        'py-4',
        'rounded-sm',
        'shadow-sm',
      )}
    >
      <p className={tw('px-2', 'font-bold')}>
        {t('user:section.hosted_spaces.title', {count: spaces.length})}
      </p>
      <div className={tw('mt-2', 'flex', 'flex-col', 'w-full', 'space-y-4')}>
        {spaces.map(({id, ...props}) => (
          <HostSpace className={tw('w-full')} key={id} {...{id, ...props}} />
        ))}
      </div>
    </section>
  );
};
