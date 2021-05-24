import React from 'react';
import {useRegisterFormContext} from '../../organisms/Form';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.VFC<ContainerProps> = ({...props}) => {
  const {
    register,
    formState: {errors},
  } = useRegisterFormContext();

  return (
    <Component
      {...props}
      register={register('displayName')}
      message={errors.displayName?.message}
    />
  );
};
