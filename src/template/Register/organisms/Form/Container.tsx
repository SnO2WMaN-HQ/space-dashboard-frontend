import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {tw} from 'twind';
import * as z from 'zod';
import {Component} from './Component';

export const schema = z.object({
  uniqueName: z
    .string()
    .min(4, 'register:error.unique_name.min')
    .max(15, 'register:error.unique_name.max')
    .regex(/[A-Za-z0-9_]+/, 'register:error.unique_name.regex'),
  displayName: z.string().max(50, 'register:error.display_name.max'),
});

export type FormInput = z.infer<typeof schema>;

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
      className={tw(className)}
      onSubmit={handleSubmit(onSubmit)}
      register={{
        uniqueName: register('uniqueName'),
        displayName: register('displayName'),
      }}
      errors={{
        uniqueName: errors.uniqueName?.message,
        displayName: errors.displayName?.message,
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
