import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {MoreUserIcon} from '~/components/atoms/MoreUserIcon';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const BlockFollowingUsers: React.VFC<{
  className?: string;
  followingUsers: {
    pageInfo: {hasMore: boolean; endCursor?: string};
    users: {
      id: string;
      uniqueName: string;
      displayName: string;
      picture: string;
    }[];
  };
}> = ({
  className,
  followingUsers: {
    users,
    pageInfo: {hasMore},
  },
}) => {
  const {t} = useTranslation();

  return (
    <div className={tw(className)}>
      <h2
        className={tw(
          ['pl-2', 'md:pl-4'],
          ['text-lg', 'md:text-xl'],
          'font-bold',
        )}
      >
        {t('common:following_user', {count: users.length})}
      </h2>
      <div
        className={tw(
          ['mt-2', 'md:mt-4'],
          ['bg-white', 'bg-opacity-75'],
          ['px-4'],
          ['py-4'],
          ['rounded-md', 'shadow-md'],
        )}
      >
        {users.length === 0 && (
          <p className={tw('text-gray-600')}>
            {t('common:no_following_users')}
          </p>
        )}
        {users.length >= 1 && (
          <div
            className={tw(
              'w-full',
              ['grid'],
              ['grid-cols-6'],
              ['gap-y-4', 'md:gap-y-4'],
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
        )}
      </div>
    </div>
  );
};
