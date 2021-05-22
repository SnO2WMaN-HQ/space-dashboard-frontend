export type ButtonState =
  | {isUntouched: true}
  | {isValidating: true}
  | {isValid: false}
  | {isValid: true}
  | {isSubmitting: true}
  | {isCompleted: true};

export const calculateState = ({
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isCompleted,
}: Record<
  'isUntouched' | 'isValid' | 'isValidating' | 'isSubmitting' | 'isCompleted',
  boolean
>): ButtonState => {
  if (isCompleted) return {isCompleted: true};
  else if (isSubmitting) return {isSubmitting: true};
  else if (isValidating) return {isValidating: true};
  else if (isUntouched) return {isUntouched: true};
  else return {isValid};
};
