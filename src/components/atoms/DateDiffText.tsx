import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {useTranslation} from 'next-i18next';
import React, {useState} from 'react';
import {tw} from 'twind';

dayjs.extend(relativeTime);

export const DateDiffText: React.VFC<{className: string; date: string}> = ({
  className,
  date,
}) => {
  const {t} = useTranslation();
  const [diff] = useState(dayjs(date).diff(new Date(), 'day'));

  if (diff < 0) return <></>;

  return (
    <span className={tw(className)}>
      {diff === 0 && t('common:today')}
      {diff < 7 && t('common:format.days_after', {days: diff})}
      {diff >= 7 &&
        t('common:format.weeks_after', {weeks: Math.round(diff / 7)})}
    </span>
  );
};
