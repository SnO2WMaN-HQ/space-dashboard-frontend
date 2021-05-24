import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserIcon} from '~/components/atoms/UserIcon';

export type ComponentProps = {
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  displayName,
  uniqueName,
  picture,
}) => {
  const {t} = useTranslation();

  return (
    <section
      className={tw(
        className,
        'px-2',
        'py-4',
        'bg-gray-50',
        'shadow-sm',
        'rounded-sm',
      )}
    >
      <p className={tw('px-2', 'font-bold')}>
        {t('user:section.profile.title')}
      </p>
      <div
        className={tw(
          'mt-2',
          'flex',
          'bg-white',
          'px-4',
          'py-3',
          'rounded-md',
          'shadow-md',
        )}
      >
        <div className={tw('flex', 'items-center', 'justify-center')}>
          <div className={tw('w-16', 'h-16')}>
            <UserIcon {...{displayName, picture}} />
          </div>
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
          <span className={tw('text-lg', 'font-bold')}>{displayName}</span>
          <UniqueName className={tw('text-gray-500')} uniqueName={uniqueName} />
        </div>
      </div>
    </section>
  );
};
