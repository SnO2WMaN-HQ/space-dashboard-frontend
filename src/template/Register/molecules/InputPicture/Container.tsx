import React from 'react';
import {useRegisterFormContext} from '../../organisms/Form';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
};
export const Container: React.VFC<ContainerProps> = ({...props}) => {
  const {watch} = useRegisterFormContext();
  const src = watch('picture');

  return <Component {...props} {...{src}} />;
};
