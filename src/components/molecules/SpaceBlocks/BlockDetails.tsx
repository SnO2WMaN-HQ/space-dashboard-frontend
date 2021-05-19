import {
  faCalendarAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Merge} from 'type-fest';
import {DateText} from '~/components/atoms/DateText';

export type ComponentProps = Merge<
  {className?: string},
  {openDate: string} | {openDate: string; finished: true}
>;

export const BlockDetails: React.VFC<ComponentProps> = ({
  className,
  openDate,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className, 'grid', 'grid-cols-2', 'gap-y-2')}>
      <div className={clsx('col-start-1', 'flex', 'items-center')}>
        <FontAwesomeIcon
          fixedWidth
          className={clsx('text-sm', 'text-gray-400')}
          icon={faCalendarAlt}
        />
        <DateText
          className={clsx('ml-1', 'text-sm', 'text-gray-500')}
          date={openDate}
        />
      </div>
      {'finished' in props && (
        <div className={clsx('col-start-1', 'flex', 'items-center')}>
          <FontAwesomeIcon
            fixedWidth
            className={clsx('text-sm', 'text-red-400')}
            icon={faExclamationCircle}
          />
          <span className={clsx('ml-1', 'text-sm', 'text-red-500')}>
            {t('finished_space')}
          </span>
        </div>
      )}
    </div>
  );
};
