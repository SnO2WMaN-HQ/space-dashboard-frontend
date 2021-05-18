import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const BlockMinutes: React.VFC<{
  className?: string;
  minutesUrl: string;
}> = ({className, minutesUrl}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className)}>
      <p className={clsx('font-bold')}>{t('space_minutes_url')}</p>
      <p className={clsx('mt-2', 'block', 'truncate')}>
        <a className={clsx('text-blue-400', 'underline')} href={minutesUrl}>
          {minutesUrl}
        </a>
      </p>
    </div>
  );
};
