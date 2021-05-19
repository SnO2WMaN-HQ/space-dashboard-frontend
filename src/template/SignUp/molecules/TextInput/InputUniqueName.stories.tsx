import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './InputUniqueName';

export default {
  title: 'TemplateSignUpPage/molecules/TextInput/InputUniqueName',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    register: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {};
