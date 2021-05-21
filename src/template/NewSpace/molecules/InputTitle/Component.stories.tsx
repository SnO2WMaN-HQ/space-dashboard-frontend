import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateNewSpacePage/molecules/InputTitle',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    register: {table: {disable: true}},
    errorMessage: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {};
