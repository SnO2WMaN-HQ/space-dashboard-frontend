import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {IconDescription} from '~/components/atoms/Icon';
import {TextArea} from '~/components/atoms/TextArea';
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
      id="description"
      className={tw(className)}
      Icon={IconDescription}
      i18n={{label: t('new:form.description.label')}}
      Input={({className, ...props}) => (
        <TextArea
          className={tw(className)}
          register={register}
          rows={5}
          {...props}
        />
      )}
      required={false}
    />
  );
};
