import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {DateDiffText} from '~/components/atoms/DateDiffText';
import {DateText} from '~/components/atoms/DateText';

export const BlockOpenDate: React.VFC<{
  className?: string;
  openDate: string;
  finished: boolean;
}> = ({className, openDate, finished}) => {
  const {t} = useTranslation();

  return (
    <div className={tw(className)}>
      <h2
        className={tw(
          ['pl-2', 'md:pl-4'],
          ['text-lg', 'md:text-xl'],
          'font-bold',
        )}
      >
        {t('common:open_date')}
      </h2>
      <div
        className={tw(
          className,
          ['mt-2', 'md:mt-4'],
          ['bg-white', 'bg-opacity-75'],
          ['px-4'],
          ['py-4'],
          ['rounded-md', 'shadow-md'],
        )}
      >
        <p className={tw('text-xl', 'tracking-wide')}>
          <DateText className={tw('font-bold')} date={openDate} />
        </p>
        <p className={tw('mt-2', 'text-sm', 'text-gray-500')}>
          {finished && (
            <span className={tw('font-bold')}>
              {t('common:finished_space')}
            </span>
          )}
          {!finished && (
            <DateDiffText className={tw('font-bold')} date={openDate} />
          )}
        </p>
      </div>
    </div>
  );
};
