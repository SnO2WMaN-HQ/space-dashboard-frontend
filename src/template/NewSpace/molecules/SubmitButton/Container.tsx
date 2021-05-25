import React from 'react';
import {useFormContext} from 'react-hook-form';
import {FormValues} from '../../organisms/Form';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Container: React.VFC<ContainerProps> = ({
  isSubmitting,
  isCompleted,
  ...props
}) => {
  const {
    formState: {isValid, isValidating, touchedFields},
  } = useFormContext<FormValues>();
  return (
    <Component
      {...props}
      {...{
        isValid,
        isValidating,
        isUntouched: Object.keys(touchedFields).length === 0,
        isSubmitting,
        isCompleted,
      }}
    />
  );
};
