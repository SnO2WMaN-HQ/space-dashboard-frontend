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

export const Following: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Following.args = {following: true};

export const Loading: Story<ComponentProps> = (args) => <Component {...args} />;
Loading.args = {pressed: true};

export const NotFollowing: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
NotFollowing.args = {following: false};
