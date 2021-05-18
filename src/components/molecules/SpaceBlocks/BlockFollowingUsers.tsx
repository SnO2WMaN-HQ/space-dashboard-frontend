import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {MoreUserIcon} from '~/components/atoms/MoreUserIcon';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const BlockFollowingUsers: React.VFC<{
  className?: string;
  users: {uniqueName: string; displayName: string; picture: string}[];
  hasMore: boolean;
}> = ({className, users, hasMore}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className)}>
      <p className={clsx('font-bold')}>
        {t('space_following_users', {count: users.length})}
      </p>
      <div
        className={clsx(
          'mt-2',
          'grid',
          'grid-cols-6',
          'sm:grid-cols-8',
          'md:grid-cols-12',
          'gap-y-2',
        )}
      >
        {users.map(({picture, uniqueName, displayName}) => (
          <div
            key={uniqueName}
            className={clsx('flex', 'justify-center', 'items-center')}
          >
            <UserIconLink
              className={clsx('w-8', 'h-8')}
              {...{uniqueName, displayName, picture}}
            />
          </div>
        ))}
        {hasMore && (
          <div className={clsx('flex', 'justify-center', 'items-center')}>
            <MoreUserIcon className={clsx('w-8', 'h-8')} />
          </div>
        )}
      </div>
    </div>
  );
};
