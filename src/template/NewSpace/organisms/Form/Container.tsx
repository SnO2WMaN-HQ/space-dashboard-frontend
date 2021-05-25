import React from 'react';
import {FormProvider, SubmitHandler} from 'react-hook-form';
import {tw} from 'twind';
import {Component} from './Component';
import {FormValues, useNewSpaceForm} from './hooks';

export type ContainerProps = {
  className?: string;
  onSubmit: SubmitHandler<FormValues>;
  isSubmitting: boolean;
  isSubmitted: boolean;
};
export const Container: React.VFC<ContainerProps> = ({
  className,
  onSubmit,
  ...props
}) => {
  const methods = useNewSpaceForm();

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
