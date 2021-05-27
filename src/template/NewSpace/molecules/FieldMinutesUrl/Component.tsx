import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {IconMinutes} from '~/components/atoms/Icon';
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
      Icon={IconMinutes}
      i18n={{label: t('new:form.minutes_url.label')}}
      Input={({className, ...props}) => (
        <InputUrl className={tw(className)} register={register} {...props} />
      )}
      required={false}
    />
  );
};
