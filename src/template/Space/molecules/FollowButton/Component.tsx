import React from 'react';
import {tw} from 'twind';
import {Component as Following} from './Following';
import {Component as Loading} from './Loading';
import {Component as NotFollowing} from './NotFollowing';

export type ComponentProps = {
  className?: string;
} & (
  | {following: true}
  | {pressed: true}
  | {following: false; handlePressed(): void}
);
export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  return (
    <>
      {'pressed' in props && (
        <Loading className={tw(className, 'py-2', 'rounded')} />
      )}
      {'following' in props && props.following && (
        <Following className={tw(className, 'py-2', 'rounded')} />
      )}
      {'following' in props && !props.following && (
        <NotFollowing
          className={tw(className, 'py-2', 'rounded')}
          handlePressed={props.handlePressed}
        />
      )}
    </>
  );
};
