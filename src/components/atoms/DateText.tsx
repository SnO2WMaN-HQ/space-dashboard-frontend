import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';

export const DateText: React.VFC<{className: string; date: string}> = ({
  className,
  date,
}) => {
  const {t} = useTranslation();
  return (
    <time className={clsx(className)}>
      {t('format.open_date', {date: new Date(date)})}
    </time>
  );
};
