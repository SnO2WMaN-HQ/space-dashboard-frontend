import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';

export const BlockMinutes: React.VFC<{
  className?: string;
  minutesUrl: string;
}> = ({className, minutesUrl}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className)}>
      <p className={clsx('font-bold')}>{t('space_block.minutes.title')}</p>
      <p className={clsx('mt-2', 'block', 'truncate')}>
        <a className={clsx('text-blue-400', 'underline')} href={minutesUrl}>
          {minutesUrl}
        </a>
      </p>
    </div>
  );
};
