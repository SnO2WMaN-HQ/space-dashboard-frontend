import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export const DateText: React.VFC<{className: string; date: string}> = ({
  className,
  date,
}) => {
  const {t} = useTranslation();
  return (
    <time className={tw(className)}>
      {t('format.open_date', {date: new Date(date)})}
    </time>
  );
};
