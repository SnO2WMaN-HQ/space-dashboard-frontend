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
        untouched: t('new:form.submit.untouched'),
        validating: t('new:form.submit.validating'),
        invalid: t('new:form.submit.invalid'),
        valid: t('new:form.submit.valid'),
        submitting: t('new:form.submit.submitting'),
        submitted: t('new:form.submit.submitted'),
      }}
    />
  );
};
