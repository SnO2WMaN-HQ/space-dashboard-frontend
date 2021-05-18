import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const BlockDescription: React.VFC<{
  className?: string;
  description: string;
}> = ({className, description}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className)}>
      <p className={clsx('font-bold')}>{t('space_description')}</p>
      <p className={clsx('mt-2')}>{description}</p>
    </div>
  );
};
