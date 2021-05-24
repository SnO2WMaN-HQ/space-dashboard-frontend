import React from 'react';
import {useFormContext} from 'react-hook-form';
import {FormValues} from '../../organisms/Form';
import {Component, ExpectedState} from './Component';

export const resolveExpectedState = ({
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isCompleted,
}: {
  isUntouched: boolean;
  isValid: boolean;
  isValidating: boolean;
  isSubmitting: boolean;
  isCompleted: boolean;
}): ExpectedState => {
  if (isCompleted) return {isCompleted: true};
  else if (isSubmitting) return {isSubmitting: true};
  else if (isValidating) return {isValidating: true};
  else if (isUntouched) return {isUntouched: true};
  else return {isValid};
};

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
      {...resolveExpectedState({
        isUntouched: Object.keys(touchedFields).length === 0,
        isValid,
        isValidating,
        isSubmitting,
        isCompleted,
      })}
    />
  );
};
