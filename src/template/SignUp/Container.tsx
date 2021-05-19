import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.VFC<ContainerProps> = (props) => {
  const onSubmit: ComponentProps['onSubmit'] = (data) => console.log(data);

  return <Component {...props} onSubmit={onSubmit} />;
};
