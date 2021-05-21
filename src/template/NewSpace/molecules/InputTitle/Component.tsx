import {faSignature} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  register,
  errorMessage,
}) => {
  const {t} = useTranslation('register');
  return (
    <label
      className={clsx(className, 'inline-flex', 'flex-col')}
      htmlFor="title"
    >
      <div className={clsx('flex', 'items-center', 'select-none')}>
        <FontAwesomeIcon
          className={clsx('text-base', 'text-blue-400')}
          icon={faSignature}
          fixedWidth
        />
        <span className={clsx('ml-2')}>{t('new:form.title.label')}</span>
        <span className={clsx('ml-1', 'text-xs', 'text-gray-500')}>
          {t('new:form.required')}
        </span>
      </div>
      <input
        id="title"
        className={clsx(
          'w-full',
          'mt-3',
          'px-4',
          'py-2',
          'rounded-sm',
          'bg-gray-100',
        )}
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
