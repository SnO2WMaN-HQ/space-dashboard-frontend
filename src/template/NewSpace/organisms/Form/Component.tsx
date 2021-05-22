import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {StatefulSubmitButton} from '~/components/molecules/StatefulSubmitButton';
import {InputDescription} from '../../molecules/InputDescription';
import {InputMinutesUrl} from '../../molecules/InputMinutesUrl';
import {InputOpenDate} from '../../molecules/InputOpenDate';
import {InputTitle} from '../../molecules/InputTitle';

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
  const {t} = useTranslation();
  return (
    <form
      className={tw(
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
        className={tw('w-full')}
        register={register.title}
        errorMessage={errors.title}
      />
      <InputOpenDate
        className={tw('w-full', 'mt-4')}
        register={register.openDate}
        errorMessage={errors.openDate}
      />
      <InputDescription
        className={tw('w-full', 'mt-4')}
        register={register.description}
        errorMessage={errors.description}
      />
      <InputMinutesUrl
        className={tw('w-full', 'mt-4')}
        register={register.minutesUrl}
        errorMessage={errors.minutesUrl}
      />
      <StatefulSubmitButton
        className={tw('mt-8', ['py-3', 'px-6'], ['rounded-sm', 'shadow-sm'])}
        i18n={{
          untouched: t('new:form.submit.untouched'),
          validating: t('new:form.submit.validating'),
          invalid: t('new:form.submit.invalid'),
          valid: t('new:form.submit.valid'),
          submitting: t('new:form.submit.submitting'),
          completed: t('new:form.submit.completed'),
        }}
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
