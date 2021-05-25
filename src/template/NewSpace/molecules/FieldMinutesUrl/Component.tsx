import {faFileSignature} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {InputUrl} from '~/components/atoms/InputUrl';
import {FieldFrame} from '../../atoms/FieldFrame';

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
    <FieldFrame
      {...{errorMessage}}
      id="minutes-url"
      className={tw(className)}
      icon={faFileSignature}
      i18n={{header: t('new:form.minutes_url.label')}}
      Input={({className, ...props}) => (
        <InputUrl className={tw(className)} register={register} {...props} />
      )}
      required={false}
    />
  );
};
