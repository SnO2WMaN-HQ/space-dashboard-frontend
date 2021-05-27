import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateRegisterPage/molecules/SubmitButton',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    isUntouched: {table: {disable: true}},
    isValidating: {table: {disable: true}},
    isValid: {table: {disable: true}},
    isSubmitting: {table: {disable: true}},
    isCompleted: {table: {disable: true}},
  },
} as Meta;

export const Untouched: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Untouched.args = {
  isUntouched: true,
};

export const Validating: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Validating.args = {
  isValidating: true,
};

export const Invalid: Story<ComponentProps> = (args) => <Component {...args} />;
Invalid.args = {
  isValid: false,
};

export const Valid: Story<ComponentProps> = (args) => <Component {...args} />;
Valid.args = {
  isValid: true,
};

export const Submitting: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Submitting.args = {
  isSubmitting: true,
};

export const Completed: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Completed.args = {
  isSubmitted: true,
};
