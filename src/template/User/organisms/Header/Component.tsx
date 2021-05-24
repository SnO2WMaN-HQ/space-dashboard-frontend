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
    <header
      className={tw(
        className,
        ['shadow-sm', 'rounded-sm'],
        ['py-4', 'md:py-8'],
        ['bg-opacity-60', 'bg-white'],
      )}
    >
      <div
        className={tw(
          'mx-auto',
          'max-w-screen-sm',
          ['px-4', 'md:px-0'],
          'flex',
        )}
      >
        <div className={tw('flex', 'items-center', 'justify-center')}>
          <UserIcon
            className={tw(['w-16', 'h-16'], ['md:w-20', 'md:h-20'])}
            {...{displayName, picture}}
          />
        </div>
        <div
          className={tw(['ml-2', 'md:ml-4'], 'flex-grow', [
            'flex',
            'flex-col',
            'justify-center',
          ])}
        >
          <span className={tw(['text-xl', 'md:text-2xl'], 'font-bold')}>
            {displayName}
          </span>
          <UniqueName
            className={tw('text-gray-700', ['text-sm', 'md:text-base'])}
            uniqueName={uniqueName}
          />
        </div>
      </div>
    </header>
  );
};
