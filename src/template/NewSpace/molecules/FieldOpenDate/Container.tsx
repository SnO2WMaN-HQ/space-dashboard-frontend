import React from 'react';
import {useNewSpaceForm} from '../../organisms/Form';
import {Component} from './Component';
import {getMinMax} from './range';

export type ContainerProps = {
  className?: string;
};
export const Container: React.VFC<ContainerProps> = ({...props}) => {
  const {
    register,
    formState: {errors},
  } = useNewSpaceForm();

  return (
    <Component
      {...props}
      {...getMinMax(new Date())}
      register={register('openDate')}
      errorMessage={errors.openDate?.message}
    />
  );
};
