import React from 'react';
import {useNewSpaceForm} from '../../organisms/Form';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.VFC<ContainerProps> = ({...props}) => {
  const {
    register,
    formState: {errors},
  } = useNewSpaceForm();
  return (
    <Component
      {...props}
      register={register('description')}
      errorMessage={errors.description?.message}
    />
  );
};
