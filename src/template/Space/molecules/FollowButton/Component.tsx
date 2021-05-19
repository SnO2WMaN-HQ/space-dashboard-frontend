import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';

export type ComponentProps = {
  className?: string;
  followed: boolean;
};
export const Component: React.VFC<ComponentProps> = ({className, followed}) => {
  const {t} = useTranslation();
  return (
    <button
      type="button"
      className={clsx(
        className,
        'py-2',
        'px-4',
        'rounded',
        'text-center',
        'border',
        {
          'border-blue-400': !followed,
          'bg-transparent': !followed,
          'hover:bg-blue-100': !followed,
        },
        {
          'bg-blue-400': followed,
          'hover:bg-gray-300': followed,
        },
      )}
    >
      <span
        className={clsx(
          {
            'text-white': followed,
            'text-blue-400': !followed,
          },
          'font-bold',
          'tracking-widest',
        )}
      >
        {!followed && t('follow_space')}
        {followed && t('unfollow_space')}
      </span>
    </button>
  );
};
