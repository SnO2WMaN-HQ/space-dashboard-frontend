import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {Component as Following} from './Following';
import {Component as Loading} from './Loading';
import {Component as NotFollowing} from './NotFollowing';

export type ComponentProps = Merge<
  {className?: string},
  | {state: 'following'}
  | {state: 'loading'}
  | {state: 'unfollowing'; handlePressed(): void}
>;
export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  return (
    <>
      {props.state === 'following' && <Following className={tw(className)} />}
      {props.state === 'loading' && <Loading className={tw(className)} />}
      {props.state === 'unfollowing' && (
        <NotFollowing
          className={tw(className)}
          handlePressed={props.handlePressed}
        />
      )}
    </>
  );
};
