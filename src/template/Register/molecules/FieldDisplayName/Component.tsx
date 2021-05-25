import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {IconDisplayName} from '~/components/atoms/Icon';
import {InputText} from '~/components/atoms/InputText';
import {FieldFrame} from '~/template/NewSpace/atoms/FieldFrame';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  message?: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  message,
  register,
}) => {
  const {t} = useTranslation();
  return (
    <FieldFrame
      {...{errorMessage: message}}
      id="display-name"
      className={tw(className)}
      Icon={IconDisplayName}
      i18n={{
        label: t('register:form.display_name.label'),
        description: t('register:form.display_name.description'),
      }}
      Input={({className, ...props}) => (
        <InputText className={tw(className)} register={register} {...props} />
      )}
      required
    />
  );
};
