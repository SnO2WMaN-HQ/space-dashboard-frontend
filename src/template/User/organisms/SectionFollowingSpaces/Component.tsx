import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {FollowingSpace} from '../../molecules/FollowingSpace';

export type ComponentProps = {
  className?: string;
  spaces: {
    id: string;
    title: string;
    openDate: string;
    hostedUser: {
      uniqueName: string;
      displayName: string;
      picture: string;
    };
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
      className={clsx(
        className,
        'bg-gray-50',
        'px-2',
        'py-4',
        'rounded-sm',
        'shadow-sm',
      )}
    >
      <p className={clsx('px-2', 'font-bold')}>
        {t('user:section.following_spaces.title', {count: spaces.length})}
      </p>
      <div className={clsx('mt-2', 'flex', 'flex-col', 'w-full', 'space-y-4')}>
        {spaces.map(({id, ...props}) => (
          <FollowingSpace
            className={clsx('w-full')}
            key={id}
            {...{id, ...props}}
          />
        ))}
      </div>
    </section>
  );
};
