import React from 'react';
import {tw} from 'twind';
import {Form, FormProps} from './organisms/Form';

export type ComponentProps = {
  className?: string;
  onSubmit: FormProps['onSubmit'];
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
    <main
      className={tw(
        className,
        'bg-gray-200',
        'flex',
        'justify-center',
        'items-center',
        'px-2',
      )}
    >
      <Form
        className={tw('w-full', 'max-w-sm')}
        onSubmit={onSubmit}
        {...{isCompleted, isSubmitting}}
      />
    </main>
  );
};
