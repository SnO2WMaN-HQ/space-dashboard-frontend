import React from 'react';
import {Component, ComponentProps} from './Component';
import {calculateState} from './state';

export type ContainerProps = {
  className?: string;
  i18n: ComponentProps['i18n'];
} & Parameters<typeof calculateState>[0];

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
      {...calculateState({
        isUntouched,
        isValid,
        isValidating,
        isSubmitting,
        isCompleted,
      })}
    />
  );
};
