import React from 'react';
import {Component} from './Component';
import {TransformedProps} from './transform';

export type ContainerProps = TransformedProps;
export const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
