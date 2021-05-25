import React from 'react';
import {tw} from 'twind';
import {PageLayout} from '~/components/layouts/PageLayout';
import {Form, FormProps} from './organisms/Form';

export type ComponentProps = {
  className?: string;

  initialValues: FormProps['initialValues'];

  onSubmit: FormProps['onSubmit'];
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  initialValues,
  onSubmit,
  isSubmitting,
  isCompleted,
}) => {
  return (
    <PageLayout
      className={tw(className, ['flex', 'justify-center', 'items-center'])}
    >
      <Form
        className={tw('w-full', 'max-w-sm')}
        onSubmit={onSubmit}
        {...{isCompleted, isSubmitting, initialValues}}
      />
    </PageLayout>
  );
};
