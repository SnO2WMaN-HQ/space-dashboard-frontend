import React from 'react';
import {tw} from 'twind';
import {InputDisplayName} from '../../molecules/InputDisplayName';
import {InputPicture} from '../../molecules/InputPicture';
import {InputUniqueName} from '../../molecules/InputUniqueName';
import {SubmitButton} from '../../molecules/SubmitButton';

export type ComponentProps = {
  className?: string;
  onSubmit(): Promise<void>;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
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
      <InputPicture className={tw('w-full')} />
      <InputUniqueName className={tw('w-full', 'mt-4')} />
      <InputDisplayName className={tw('w-full', 'mt-8')} />
      <SubmitButton
        className={tw('mt-8')}
        {...{
          isSubmitting,
          isCompleted,
        }}
      />
    </form>
  );
};
