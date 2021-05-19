import dynamic from 'next/dynamic';
import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
};
export const PlainContainer: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} followed={false} />;
};
export const Container = dynamic(async () => PlainContainer, {ssr: false});
