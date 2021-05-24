import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {tw} from 'twind';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateTimelinePage',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={tw('w-full')} />
);

Primary.args = {
  displayName: 'Test User 1',
  uniqueName: 'testuser1',
  picture: random.icon(),
  hostedSpaces: {
    pageInfo: {endCursor: '1', hasMore: true},
    spaces: Array.from({length: 2}).map((_, i) => ({
      id: `${i}`,
      title: `タイトル ${i}`,
      openDate: '2020-01-01',
      hostedUser: {
        displayName: 'Test User',
        uniqueName: 'testuser',
        picture: random.icon(),
      },
      followingUsers: {
        hasMore: true,
        users: Array.from({length: 11}).map((_, j) => ({
          displayName: `Test User ${j + 1}`,
          uniqueName: `testuser${j + 1}`,
          picture: random.icon(j + 1),
        })),
      },
    })),
  },
  followingSpaces: {
    pageInfo: {endCursor: '1', hasMore: true},
    spaces: Array.from({length: 2}).map((_, i) => ({
      id: `${i}`,
      title: `タイトル ${i}`,
      openDate: '2020-01-01',
      hostedUser: {
        displayName: 'Test User',
        uniqueName: 'testuser',
        picture: random.icon(),
      },
      followingUsers: {
        hasMore: true,
        users: Array.from({length: 11}).map((_, j) => ({
          displayName: `Test User ${j + 1}`,
          uniqueName: `testuser${j + 1}`,
          picture: random.icon(j + 1),
        })),
      },
    })),
  },
};
