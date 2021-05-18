import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const DateText: React.VFC<{className: string; date: string}> = ({
  className,
  date,
}) => {
  const {t} = useTranslation();
  return (
    <time className={clsx(className)}>
      {t('format:open_date', {date: new Date(date)})}
    </time>
  );
};
