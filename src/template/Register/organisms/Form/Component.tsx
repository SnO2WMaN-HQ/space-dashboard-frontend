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
  isSubmitted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
  isSubmitting,
  isSubmitted,
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
          className={tw(['py-3', 'px-6'], ['rounded-sm', 'shadow-sm'])}
          {...{
            isSubmitting,
            isCompleted: isSubmitted,
          }}
        />
      </div>
    </form>
  );
};
