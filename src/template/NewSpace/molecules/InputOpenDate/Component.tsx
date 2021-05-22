import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;

  minDate: string;
  maxDate: string;
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  register,
  errorMessage,
  minDate,
  maxDate,
}) => {
  const {t} = useTranslation('register');
  return (
    <label
      className={clsx(className, 'inline-flex', 'flex-col')}
      htmlFor="open-date"
    >
      <div className={clsx('flex', 'items-center', 'select-none')}>
        <FontAwesomeIcon
          className={clsx('text-base', 'text-blue-400')}
          icon={faCalendarDay}
          fixedWidth
        />
        <span className={clsx('ml-2')}>{t('new:form.open_date.label')}</span>
        <span className={clsx('ml-1', 'text-xs', 'text-gray-500')}>
          {t('new:form.required')}
        </span>
      </div>
      <input
        className={clsx(
          'w-full',
          'mt-3',
          'px-4',
          'py-2',
          'rounded-sm',
          'bg-gray-100',
        )}
        id="open-date"
        type="date"
        aria-label={t('new:form.open_date.label')}
        min={minDate}
        max={maxDate}
        {...register}
      />
      <div className={clsx('mt-2')}>
        {errorMessage && (
          <p className={clsx('mt-1', 'text-xs', 'text-red-600')}>
            {t(errorMessage)}
          </p>
        )}
      </div>
    </label>
  );
};
