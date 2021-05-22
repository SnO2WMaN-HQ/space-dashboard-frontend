import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {tw} from 'twind';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateIndexPage',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={tw('w-full', 'min-h-screen')} />
);
Primary.args = {};
