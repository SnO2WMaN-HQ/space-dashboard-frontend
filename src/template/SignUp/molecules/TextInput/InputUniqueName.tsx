import {faAt} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  message?: string;
  register: UseFormRegisterReturn;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation('signup');
  return (
    <BaseComponent
      {...props}
      i18n={{
        label: t('signup:unique_name.label'),
        description: t('signup:unique_name.description'),
      }}
      id="uniqueName"
      icon={faAt}
    />
  );
};
