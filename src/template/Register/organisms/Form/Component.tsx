import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {SubmitButton} from '../../molecules/SubmitButton';
import {DisplayNameInput, UniqueNameInput} from '../../molecules/TextInput';

export type ComponentProps = {
  className?: string;

  onSubmit(): Promise<void>;
  register: Record<'uniqueName' | 'displayName', UseFormRegisterReturn>;
  errors: {uniqueName?: string; displayName?: string};

  isUntouched: boolean;
  isValid: boolean;
  isValidating: boolean;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
  register,
  errors,
  isUntouched,
  isValid,
  isValidating,
  isSubmitting,
  isCompleted,
}) => {
  return (
    <form
      className={tw(
        className,
        'bg-white',
        ['px-4', 'sm:px-6'],
        ['py-6', 'sm:py-8'],
        'shadow-md',
        'rounded-md',
        'flex',
        'flex-col',
        'items-center',
      )}
      onSubmit={onSubmit}
    >
      <UniqueNameInput
        className={tw('w-full')}
        register={register.uniqueName}
        message={errors.uniqueName}
      />
      <DisplayNameInput
        className={tw('w-full', 'mt-8')}
        register={register.displayName}
        message={errors.displayName}
      />
      <SubmitButton
        className={tw('mt-8')}
        {...{
          isUntouched,
          isValid,
          isValidating,
          isSubmitting,
          isCompleted,
        }}
      />
    </form>
  );
};
