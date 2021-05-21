import {zodResolver} from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Component} from './Component';
import {FormInput, schema} from './definition';

export type ContainerProps = {
  className?: string;
  onSubmit: SubmitHandler<FormInput>;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Container: React.VFC<ContainerProps> = ({
  className,
  onSubmit,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isValidating, touchedFields},
  } = useForm<FormInput>({mode: 'onBlur', resolver: zodResolver(schema)});

  return (
    <Component
      className={clsx(className)}
      onSubmit={handleSubmit(onSubmit)}
      register={{
        title: register('title', {required: true}),
        description: register('description', {required: false}),
        minutesUrl: register('minutesUrl', {required: false}),
        openDate: register('openDate', {required: true}),
      }}
      errors={{
        title: errors.title?.message,
        description: errors.description?.message,
        minutesUrl: errors.minutesUrl?.message,
        openDate: errors.openDate?.message,
      }}
      {...{
        isUntouched: Object.keys(touchedFields).length === 0,
        isValid,
        isValidating,
        ...props,
      }}
    />
  );
};
