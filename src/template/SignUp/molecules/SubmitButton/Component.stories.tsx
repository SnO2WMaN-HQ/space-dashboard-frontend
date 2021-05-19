import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateSignUpPage/molecules/SubmitButton',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Followed: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Followed.args = {};
