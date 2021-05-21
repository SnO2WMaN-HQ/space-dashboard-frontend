import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {Component} from './Component';
import {getMinMax} from './range';

export type ContainerProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};
export const Container: React.VFC<ContainerProps> = ({...props}) => {
  return <Component {...props} {...getMinMax(new Date())} />;
};
