import {faSignature} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {BaseComponent} from '../TextInput';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  message?: string;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        label: t('register:display_name.label'),
        description: t('register:display_name.description'),
      }}
      id="displayName"
      icon={faSignature}
    />
  );
};
