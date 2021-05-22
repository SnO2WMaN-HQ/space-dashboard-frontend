import React from 'react';
import {tw} from 'twind';
import {
  Completed,
  Invalid,
  Submitting,
  Untouched,
  Validating,
} from './Disabled';
import {ButtonState} from './state';
import {SubmitButton} from './SubmitButton';

export type ComponentProps = ButtonState & {
  className?: string;
  i18n: Record<
    | 'untouched'
    | 'validating'
    | 'invalid'
    | 'valid'
    | 'submitting'
    | 'completed',
    string
  >;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  i18n,
  ...props
}) => {
  return (
    <>
      {'isUntouched' in props && (
        <Untouched className={tw(className)} i18n={{text: i18n.untouched}} />
      )}
      {'isValidating' in props && props.isValidating && (
        <Validating className={tw(className)} i18n={{text: i18n.validating}} />
      )}
      {'isValid' in props && !props.isValid && (
        <Invalid className={tw(className)} i18n={{text: i18n.invalid}} />
      )}
      {'isSubmitting' in props && (
        <Submitting className={tw(className)} i18n={{text: i18n.submitting}} />
      )}
      {'isCompleted' in props && (
        <Completed className={tw(className)} i18n={{text: i18n.completed}} />
      )}
      {'isValid' in props && props.isValid && (
        <SubmitButton className={tw(className)} i18n={{text: i18n.valid}} />
      )}
    </>
  );
};
