import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {getMaxDate, getMinDate} from '../../organisms/Form';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};
export const Container: React.VFC<ContainerProps> = ({...props}) => {
  return (
    <Component
      {...props}
      minDate={getMinDate().format('YYYY-MM-DD')}
      maxDate={getMaxDate().format('YYYY-MM-DD')}
    />
  );
};
