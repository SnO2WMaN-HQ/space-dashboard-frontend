import {ButtonState} from './Component';

export const useButtonSatte = ({
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isSubmitted,
}: Record<
  'isUntouched' | 'isValid' | 'isValidating' | 'isSubmitting' | 'isSubmitted',
  boolean
>): ButtonState => {
  if (isSubmitted) return {state: 'submitted', disabled: true};
  else if (isSubmitting) return {state: 'submitting', disabled: true};
  else if (isValidating) return {state: 'validating', disabled: true};
  else if (isUntouched) return {state: 'untouched', disabled: true};
  else if (isValid) return {state: 'valid', disabled: false};
  else return {state: 'invalid', disabled: true};
};
