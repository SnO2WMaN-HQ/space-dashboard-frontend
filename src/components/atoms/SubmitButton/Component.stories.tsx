import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'atoms/SubmitButton',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    state: {table: {disable: true}},
    disabled: {table: {disable: true}},
  },
  args: {
    i18n: {
      untouched: 'untouched',
      validating: 'validating',
      invalid: 'invalid',
      valid: 'valid',
      submitting: 'submitting',
      submitted: 'submitted',
    },
  },
} as Meta;

export const Untouched: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Untouched.args = {
  state: 'untouched',
  disabled: true,
};

export const Validating: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Validating.args = {
  state: 'validating',
  disabled: true,
};

export const Invalid: Story<ComponentProps> = (args) => <Component {...args} />;
Invalid.args = {
  state: 'invalid',
  disabled: true,
};

export const Valid: Story<ComponentProps> = (args) => <Component {...args} />;
Valid.args = {
  state: 'valid',
  disabled: false,
};

export const Submitting: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Submitting.args = {
  state: 'submitting',
  disabled: true,
};

export const Submitted: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Submitted.args = {
  state: 'submitted',
  disabled: true,
};
