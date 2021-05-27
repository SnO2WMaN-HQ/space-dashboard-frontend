import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {tw} from 'twind';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateNewSpacePage',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    onSubmit: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={tw('w-full', 'min-h-screen')} />
);
Primary.args = {
  displayName: 'Test User 1',
  uniqueName: 'testuser1',
  picture: random.icon(),
};
