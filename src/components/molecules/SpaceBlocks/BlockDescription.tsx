import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';

export const BlockDescription: React.VFC<{
  className?: string;
  description: string;
}> = ({className, description}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className)}>
      <p className={clsx('font-bold')}>{t('space_block.description.title')}</p>
      <p className={clsx('mt-2')}>{description}</p>
    </div>
  );
};
