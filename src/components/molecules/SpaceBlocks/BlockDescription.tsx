import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export const BlockDescription: React.VFC<{
  className?: string;
  description: string;
}> = ({className, description}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className)}>
      <p className={tw('font-bold')}>{t('space_block.description.title')}</p>
      <p className={tw('mt-2')}>{description}</p>
    </div>
  );
};
