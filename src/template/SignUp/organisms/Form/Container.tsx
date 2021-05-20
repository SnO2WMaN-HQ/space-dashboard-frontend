import {zodResolver} from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import * as z from 'zod';
import {Component} from './Component';

export const schema = z.object({
  uniqueName: z
    .string()
    .min(4, 'signup:error.unique_name.min')
    .max(15, 'signup:error.unique_name.max'),
  displayName: z.string().max(50, 'signup:error.display_name.max'),
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
      className={clsx(className)}
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
