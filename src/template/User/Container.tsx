import React from 'react';
import {Merge} from 'type-fest';
import {Component} from './Component';
import {TransformedProps} from './transform';

export type ContainerProps = Merge<{className?: string}, TransformedProps>;
export const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
