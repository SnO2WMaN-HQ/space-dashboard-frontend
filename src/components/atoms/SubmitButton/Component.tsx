import React from 'react';
import {tw} from 'twind';
import {
  IconLoading,
  IconSubmitted,
  IconUntouched,
  IconValid,
  IconWarning,
} from '../Icon';

export type State =
  | 'untouched'
  | 'validating'
  | 'invalid'
  | 'valid'
  | 'submitting'
  | 'submitted';

export type ButtonState =
  | {state: Extract<State, 'valid'>; disabled: false}
  | {state: Exclude<State, 'valid'>; disabled: true};

export const Icons = {
  untouched: IconUntouched,
  validating: IconLoading,
  invalid: IconWarning,
  valid: IconValid,
  submitting: IconLoading,
  submitted: IconSubmitted,
};

export type ComponentProps = {
  className?: string;
  i18n: Record<State, string>;
} & ButtonState;
export const Component: React.VFC<ComponentProps> = ({
  className,
  i18n,
  state,
  disabled,
}) => {
  const Icon = Icons[state];
  return (
    <button
      id="submit"
      type="submit"
      disabled={disabled}
      className={tw(
        className,
        ['disabled:cursor-default'],
        state === 'untouched' ? ['bg-gray-300', 'text-gray-400'] : [],
        state === 'validating' ? ['bg-gray-300', 'text-gray-400'] : [],
        state === 'invalid' ? ['bg-red-400', 'text-white'] : [],
        state === 'valid'
          ? [['bg-blue-400', 'hover:bg-blue-500'], 'text-white']
          : [],
        state === 'submitting' ? ['bg-purple-400', 'text-white'] : [],
        state === 'submitted' ? ['bg-pink-400', 'text-white'] : [],
      )}
      aria-label={i18n[state]}
    >
      <Icon className={tw()} />
      <span className={tw('ml-2', {'font-bold': state === 'valid'})}>
        {i18n[state]}
      </span>
    </button>
  );
};
