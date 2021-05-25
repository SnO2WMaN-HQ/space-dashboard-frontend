import React from 'react';
import {Component, ComponentProps} from './Component';
import {useButtonSatte} from './hooks';

export type ContainerProps = {
  className?: string;
  i18n: ComponentProps['i18n'];
} & Parameters<typeof useButtonSatte>[0];

export const Container: React.VFC<ContainerProps> = ({
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isSubmitted,
  ...props
}) => {
  const buttonState = useButtonSatte({
    isUntouched,
    isValid,
    isValidating,
    isSubmitting,
    isSubmitted,
  });
  return <Component {...props} {...buttonState} />;
};
