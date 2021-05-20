import React from 'react';
import {Component, ExpectedState} from './Component';

export type ContainerProps = {
  className?: string;
  isUntouched: boolean;
  isValid: boolean;
  isValidating: boolean;
  isSubmitting: boolean;
  isCompleted: boolean;
};

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

export const Container: React.VFC<ContainerProps> = ({
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isCompleted,
  ...props
}) => {
  return (
    <Component
      {...props}
      {...resolveExpectedState({
        isUntouched,
        isValid,
        isValidating,
        isSubmitting,
        isCompleted,
      })}
    />
  );
};
