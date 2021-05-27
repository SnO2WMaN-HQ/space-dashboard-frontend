import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserPictureLink} from '~/components/atoms/UserPictureLink';

export const BlockHostUser: React.VFC<{
  className?: string;
  hostUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
}> = ({className, hostUser}) => {
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
        {t('common:host_user')}
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
        <div className={tw('flex', 'items-center', 'justify-center')}>
          <UserPictureLink
            className={tw(['w-16', 'h-16'], ['md:w-16', 'md:h-16'])}
            {...hostUser}
          />
        </div>
        <div
          className={tw(['ml-2', 'md:ml-4'], 'flex-grow', [
            'flex',
            'flex-col',
            'justify-center',
          ])}
        >
          <span className={tw(['text-lg', 'md:text-xl'], 'font-bold')}>
            {hostUser.displayName}
          </span>
          <UniqueName
            className={tw('text-gray-700', ['text-sm', 'md:text-base'])}
            uniqueName={hostUser.uniqueName}
          />
        </div>
      </div>
    </div>
  );
};
