import React from 'react';
import {Merge} from 'type-fest';
import {Component, ComponentProps} from './Component';
import {useCreateSpace} from './hooks';
import {TransformedProps} from './transform';

export type ContainerProps = Merge<{className?: string}, TransformedProps>;
export const Container: React.VFC<ContainerProps> = ({
  id: hostUserId,
  ...props
}) => {
  const [createSpace, {loading, completed}] = useCreateSpace();

  const onSubmit: ComponentProps['onSubmit'] = async (data) =>
    createSpace({
      hostUserId,
      ...data,
    });

  return (
    <Component
      {...props}
      onSubmit={onSubmit}
      {...{isSubmitting: loading, isCompleted: completed}}
    />
  );
};
