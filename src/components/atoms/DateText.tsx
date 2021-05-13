import clsx from 'clsx';
import dayjs from 'dayjs';
import React from 'react';

export const DateText: React.VFC<{className: string; date: string}> = ({
  className,
  date,
}) => (
  <time className={clsx(className)}>
    {dayjs(new Date(date)).format('YYYY年M月D日')}
  </time>
);
