import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {tw} from 'twind';
import {Component as FollowButton} from '../FollowButton';
import {Component, ComponentProps} from './Component';

const DummyFollowButton: ComponentProps['Follow'] = ({className, ...props}) => (
  <FollowButton className={tw(className)} state="following" />
);

export default {
  title: 'TemplateSpacePage/molecules/BlockFollow',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    following: {table: {disable: true}},
    handlePressed: {table: {disable: true}},
  },
} as Meta;

export const Loading: Story<ComponentProps> = (args) => <Component {...args} />;
Loading.args = {loading: true};

export const RequireLogin: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
RequireLogin.args = {loading: false, requireLogin: true};

export const Logined: Story<ComponentProps> = (args) => <Component {...args} />;

Logined.args = {
  id: 'space1',
  loading: false,
  requireLogin: false,
  Follow: DummyFollowButton,
};
