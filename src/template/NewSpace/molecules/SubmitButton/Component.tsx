import {useTranslation} from 'next-i18next';
import React from 'react';
import {StatefulSubmitButton} from '~/components/molecules/StatefulSubmitButton';

export type ComponentProps = {
  className?: string;
  isUntouched: boolean;
  isValidating: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isCompleted,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <StatefulSubmitButton
      {...props}
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
  );
};
