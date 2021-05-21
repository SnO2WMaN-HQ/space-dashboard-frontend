import clsx from 'clsx';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {InputDescription} from '../../molecules/InputDescription';
import {InputMinutesUrl} from '../../molecules/InputMinutesUrl';
import {InputOpenDate} from '../../molecules/InputOpenDate';
import {InputTitle} from '../../molecules/InputTitle';
import {SubmitButton} from '../../molecules/SubmitButton';

export type ComponentProps = {
  className?: string;

  onSubmit(): Promise<void>;
  register: Record<
    'title' | 'description' | 'minutesUrl' | 'openDate',
    UseFormRegisterReturn
  >;
  errors: {
    title?: string;
    description?: string;
    minutesUrl?: string;
    openDate?: string;
  };

  isUntouched: boolean;
  isValid: boolean;
  isValidating: boolean;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
  register,
  errors,
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isCompleted,
}) => {
  return (
    <form
      className={clsx(
        className,
        'bg-white',
        ['px-4', 'sm:px-6'],
        ['py-6', 'sm:py-8'],
        'shadow-md',
        'rounded-md',
        'flex',
        'flex-col',
        'items-center',
      )}
      onSubmit={onSubmit}
    >
      <InputTitle
        className={clsx('w-full')}
        register={register.title}
        errorMessage={errors.title}
      />
      <InputOpenDate
        className={clsx('w-full', 'mt-4')}
        register={register.openDate}
        errorMessage={errors.openDate}
      />
      <InputDescription
        className={clsx('w-full', 'mt-4')}
        register={register.description}
        errorMessage={errors.description}
      />
      <InputMinutesUrl
        className={clsx('w-full', 'mt-4')}
        register={register.minutesUrl}
        errorMessage={errors.minutesUrl}
      />
      <SubmitButton
        className={clsx('mt-8')}
        {...{
          isUntouched,
          isValid,
          isValidating,
          isSubmitting,
          isCompleted,
        }}
      />
    </form>
  );
};
