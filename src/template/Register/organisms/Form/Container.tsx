import React from 'react';
import {FormProvider, SubmitHandler} from 'react-hook-form';
import {tw} from 'twind';
import {Component} from './Component';
import {FormValues, useRegisterForm} from './hooks';

export type ContainerProps = {
  className?: string;
  onSubmit: SubmitHandler<FormValues>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  initialValues: Partial<
    Record<'uniqueName' | 'displayName' | 'picture', string>
  >;
};
export const Container: React.VFC<ContainerProps> = ({
  className,
  onSubmit,
  initialValues,
  ...props
}) => {
  const methods = useRegisterForm({initialValues});

  return (
    <FormProvider {...methods}>
      <Component
        className={tw(className)}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...props}
      />
    </FormProvider>
  );
};
