import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const BlockHostUser: React.VFC<{
  className?: string;
  user: {uniqueName: string; displayName: string; picture: string};
}> = ({className, user}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className)}>
      <p className={tw('font-bold')}>{t('space_block.host_user.title')}</p>
      <div className={tw('mt-2', 'flex', 'px-0', 'sm:px-2')}>
        <div className={tw('w-16', 'h-16')}>
          <UserIconLink
            {...{
              uniqueName: user.uniqueName,
              displayName: user.displayName,
              picture: user.picture,
            }}
          />
        </div>
        <div
          className={tw(
            'ml-4',
            'flex-grow',
            'flex',
            'flex-col',
            'justify-center',
          )}
        >
          <span className={tw('text-lg', 'font-bold')}>{user.displayName}</span>
          <UniqueName
            className={tw('text-gray-500', 'truncate')}
            uniqueName={user.uniqueName}
          />
        </div>
      </div>
    </div>
  );
};
