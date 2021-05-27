import {useTranslation} from 'next-i18next';
import React from 'react';
import {SubmitButton} from '~/components/atoms/SubmitButton';

export type ComponentProps = {
  className?: string;
  isUntouched: boolean;
  isValidating: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  isSubmitted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <SubmitButton
      {...props}
      i18n={{
        untouched: t('register:form.submit.untouched'),
        validating: t('register:form.submit.validating'),
        invalid: t('register:form.submit.invalid'),
        valid: t('register:form.submit.valid'),
        submitting: t('register:form.submit.submitting'),
        submitted: t('register:form.submit.submitted'),
      }}
    />
  );
};
