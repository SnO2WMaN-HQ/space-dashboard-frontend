import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {MoreUserIcon} from '~/components/atoms/MoreUserIcon';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const BlockFollowingUsers: React.VFC<{
  className?: string;
  users: {uniqueName: string; displayName: string; picture: string}[];
  hasMore: boolean;
}> = ({className, users, hasMore}) => {
  const {t} = useTranslation('common');
  return (
    <div className={tw(className)}>
      <p className={tw('font-bold')}>
        {t('space_block.following_users.title', {count: users.length})}
      </p>
      <div
        className={tw(
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
            className={tw('flex', 'justify-center', 'items-center')}
          >
            <UserIconLink
              className={tw('w-8', 'h-8')}
              {...{uniqueName, displayName, picture}}
            />
          </div>
        ))}
        {hasMore && (
          <div className={tw('flex', 'justify-center', 'items-center')}>
            <MoreUserIcon className={tw('w-8', 'h-8')} />
          </div>
        )}
      </div>
    </div>
  );
};
