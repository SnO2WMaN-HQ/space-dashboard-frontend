import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

dayjs.extend(relativeTime);

const useDiff = (
  date: string,
  now: Date,
): {today: true} | {days: number} | {weeks: number} | {months: number} => {
  const diffMonths = dayjs(date).diff(now, 'month');
  const diffWeeks = dayjs(date).diff(now, 'week');
  const diffDays = dayjs(date).diff(now, 'day');

  if (Math.abs(diffMonths) >= 1) return {months: diffMonths};
  else if (Math.abs(diffWeeks) >= 1) return {weeks: diffWeeks};
  else if (Math.abs(diffDays) >= 1) return {days: diffDays};
  else return {today: true};
};

export const DateDiffText: React.VFC<{className: string; date: string}> = ({
  className,
  date,
}) => {
  const {t} = useTranslation();
  const diff = useDiff(date, new Date());

  return (
    <span className={tw(className)}>
      {'days' in diff &&
        diff.days < 0 &&
        t('common:format.days_before', {days: Math.abs(diff.days)})}
      {'days' in diff &&
        diff.days > 0 &&
        t('common:format.days_after', {days: diff.days})}
      {'weeks' in diff &&
        diff.weeks < 0 &&
        t('common:format.weeks_before', {weeks: Math.abs(diff.weeks)})}
      {'weeks' in diff &&
        diff.weeks > 0 &&
        t('common:format.weeks_after', {weeks: diff.weeks})}
      {'months' in diff &&
        diff.months < 0 &&
        t('common:format.months_before', {months: Math.abs(diff.months)})}
      {'months' in diff &&
        diff.months > 0 &&
        t('common:format.months_after', {months: diff.months})}
      {'today' in diff && t('common:today')}
    </span>
  );
};
