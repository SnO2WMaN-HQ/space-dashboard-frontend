import {faAt} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation('common');
  return (
    <BaseComponent
      {...props}
      i18n={{label: t('unique_name')}}
      id="uniqueName"
      icon={faAt}
    />
  );
};
