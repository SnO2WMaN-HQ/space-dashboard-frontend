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
        ['shadow-sm', 'rounded-sm'],
        ['px-4'],
        ['py-4', 'md:py-4'],
        ['bg-opacity-50', 'bg-white'],
      )}
    >
      <p
        className={tw(
          ['pl-2', 'md:pl-4'],
          ['text-lg', 'md:text-xl'],
          'font-bold',
        )}
      >
        {t('user:section.hosted_spaces.title', {count: spaces.length})}
      </p>
      <div
        className={tw(
          'w-full',
          ['mt-2', 'md:mt-4'],
          ['flex', 'flex-col'],
          'space-y-4',
        )}
      >
        {spaces.map(({id, ...props}) => (
          <HostSpace className={tw('w-full')} key={id} {...{id, ...props}} />
        ))}
      </div>
    </section>
  );
};
