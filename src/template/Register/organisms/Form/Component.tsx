import React from 'react';
import {tw} from 'twind';
import {FieldDisplayName} from '../../molecules/FieldDisplayName';
import {FieldUniqueName} from '../../molecules/FieldUniqueName';
import {InputPicture} from '../../molecules/InputPicture';
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
        ['bg-opacity-60', 'bg-white'],
        ['px-4', 'sm:px-6'],
        ['py-6', 'sm:py-8'],
        ['shadow-sm', 'rounded-sm'],
        ['grid', ['grid-cols-1'], 'gap-y-8'],
      )}
      onSubmit={onSubmit}
    >
      <InputPicture className={tw(['col-span-full'])} />
      <FieldUniqueName className={tw(['col-span-full'])} />
      <FieldDisplayName className={tw(['col-span-full'])} />
      <div
        className={tw('col-span-full', [
          'flex',
          'justify-center',
          'items-center',
        ])}
      >
        <SubmitButton
          {...{
            isSubmitting,
            isCompleted,
          }}
        />
      </div>
    </form>
  );
};
