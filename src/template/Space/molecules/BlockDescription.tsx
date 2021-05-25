import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  description?: string;
};
export const BlockDescription: React.VFC<ComponentProps> = ({
  className,
  description,
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
        {t('common:description')}
      </h2>
      <div
        className={tw(
          className,
          ['mt-2', 'md:mt-4'],
          ['bg-white', 'bg-opacity-75'],
          ['px-4'],
          ['py-2'],
          ['rounded-md', 'shadow-md'],
        )}
      >
        <p className={tw('tracking-wide')}>{description}</p>
        {!description && (
          <p className={tw('text-gray-600')}>{t('common:no_description')}</p>
        )}
      </div>
    </div>
  );
};
