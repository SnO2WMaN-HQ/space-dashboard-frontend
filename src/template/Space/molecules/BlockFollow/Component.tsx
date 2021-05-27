import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {LinkSpace} from '~/components/atoms/Link';
import {FollowButton} from '../FollowButton';

export const Component: React.VFC<{
  className?: string;
  id: string;

  requireLogin: boolean;
}> = ({className, id, requireLogin}) => {
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
        {t('blocks:follow.title')}
      </h2>
      <div
        className={tw(
          ['mt-2', 'md:mt-4'],
          ['bg-white', 'bg-opacity-75'],
          ['px-4'],
          ['py-4'],
          ['rounded-md', 'shadow-md'],
          ['flex', 'items-center'],
        )}
      >
        {requireLogin && <LinkSpace query={{id}} />}
        {!requireLogin && <FollowButton {...{spaceId: id}} />}
      </div>
    </div>
  );
};
