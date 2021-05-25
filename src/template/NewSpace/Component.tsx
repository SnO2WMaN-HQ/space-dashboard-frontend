import React from 'react';
import {tw} from 'twind';
import {PageLayout} from '~/components/layouts/PageLayout';
import {Header} from '../User/organisms/Header';
import {Form, FormProps} from './organisms/Form';

export type ComponentProps = {
  className?: string;
  displayName: string;
  uniqueName: string;
  picture: string;
  onSubmit: FormProps['onSubmit'];
  isSubmitting: boolean;
  isSubmitted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  displayName,
  uniqueName,
  picture,
  onSubmit,
  isSubmitting,
  isSubmitted,
}) => {
  return (
    <PageLayout className={tw(className)}>
      <main
        className={tw(
          'w-full',
          ['grid'],
          ['grid-cols-1', 'md:grid-cols-2'],
          ['md:gap-x-4'],
          ['gap-y-4'],
        )}
      >
        <Header
          className={tw(['col-span-1', 'md:col-span-2'])}
          {...{displayName, picture, uniqueName}}
        />
        <Form
          className={tw(['col-span-1', 'md:col-span-2'])}
          onSubmit={onSubmit}
          {...{isSubmitted, isSubmitting}}
        />
      </main>
    </PageLayout>
  );
};
