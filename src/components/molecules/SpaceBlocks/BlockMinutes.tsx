import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export const BlockMinutes: React.VFC<{
  className?: string;
  minutesUrl: string;
}> = ({className, minutesUrl}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className)}>
      <p className={tw('font-bold')}>{t('space_block.minutes.title')}</p>
      <p className={tw('mt-2', 'block', 'truncate')}>
        <a className={tw('text-blue-400', 'underline')} href={minutesUrl}>
          {minutesUrl}
        </a>
      </p>
    </div>
  );
};
