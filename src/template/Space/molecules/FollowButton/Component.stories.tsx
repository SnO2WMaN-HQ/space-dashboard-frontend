import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateSpacePage/molecules/FollowButton',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    following: {table: {disable: true}},
    handlePressed: {table: {disable: true}},
  },
} as Meta;

export const Unfollowing: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Unfollowing.args = {state: 'unfollowing'};

export const Changing: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Changing.args = {state: 'changing'};

export const Following: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Following.args = {state: 'following'};

export const HostSame: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
HostSame.args = {state: 'hostSame'};
