import {useRouter} from 'next/router';
import React from 'react';
import {Merge} from 'type-fest';
import {Component} from './Component';
import {useRegister} from './hooks';
import {FormProps} from './organisms/Form';
import {TransformProps} from './transform';

export type ContainerProps = Merge<{className?: string}, TransformProps>;
export const Container: React.VFC<ContainerProps> = ({
  initialValues: initial,
  ...props
}) => {
  const [register, {loading, completed}] = useRegister();
  const router = useRouter();

  const onSubmit: FormProps['onSubmit'] = async (data) =>
    register(data).then(() => {
      router.push('/timeline');
    });

  return (
    <Component
      {...props}
      onSubmit={onSubmit}
      {...{
        isSubmitting: loading,
        isCompleted: completed,
        initialValues: initial,
      }}
    />
  );
};
