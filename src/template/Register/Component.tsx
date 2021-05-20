import clsx from 'clsx';
import React from 'react';
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
      className={clsx(
        className,
        'bg-gray-200',
        'flex',
        'justify-center',
        'items-center',
        'px-2',
      )}
    >
      <Form
        className={clsx('w-full', 'max-w-sm')}
        onSubmit={onSubmit}
        {...{isCompleted, isSubmitting}}
      />
    </main>
  );
};
