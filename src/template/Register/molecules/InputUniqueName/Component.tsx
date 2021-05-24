import {faAt} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {BaseComponent} from '../TextInput';

export type ComponentProps = {
  className?: string;
  message?: string;
  register: UseFormRegisterReturn;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        label: t('register:unique_name.label'),
        description: t('register:unique_name.description'),
      }}
      id="uniqueName"
      icon={faAt}
    />
  );
};
