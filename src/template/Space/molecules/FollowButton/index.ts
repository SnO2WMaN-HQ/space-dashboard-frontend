import dynamic from 'next/dynamic';
import type {ContainerProps} from './Container';

export {Component} from './Component';
export type {ComponentProps} from './Component';
export {Container} from './Container';
export type {ContainerProps as FollowButtonProps} from './Container';

export const FollowButton = dynamic<ContainerProps>(
  () => import('./Container').then((mod) => mod.Container),
  {ssr: false},
);
