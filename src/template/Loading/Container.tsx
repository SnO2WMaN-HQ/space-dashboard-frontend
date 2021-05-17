import React from 'react';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
