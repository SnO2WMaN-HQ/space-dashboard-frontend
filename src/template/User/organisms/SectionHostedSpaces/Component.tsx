import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {SectionFrame} from '../../atoms/SectionFrame';
import {HostedSpace} from '../../molecules/HostedSpace';

export type ComponentProps = {
  className?: string;
  spaces: {
    id: string;
    title: string;
    description?: string;
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
    <SectionFrame className={tw(className)}>
      <h2
        className={tw(
          ['pl-2', 'md:pl-4'],
          ['text-lg', 'md:text-xl'],
          'font-bold',
        )}
      >
        {t('user:section.hosted_spaces.title', {count: spaces.length})}
      </h2>
      <div
        className={tw(
          'w-full',
          ['mt-2', 'md:mt-4'],
          ['flex', 'flex-col'],
          ['space-y-4'],
        )}
      >
        {spaces.map(({id, ...props}) => (
          <HostedSpace key={id} {...{id, ...props}} />
        ))}
      </div>
    </SectionFrame>
  );
};
