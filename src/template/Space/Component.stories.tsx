import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {tw} from 'twind';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateSpacePage',
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
  <Component {...args} className={tw('w-full', 'min-h-screen')} />
);

Primary.args = {
  id: 'space-1',
  title: `タイトル 1`,
  description: '(　；∀；) ｲｲﾊﾅｼﾀﾞﾅｰ',
  finished: true,
  openDate: '2020-01-01',
  minutesUrl: 'https://scrapbox.io/space/2020.01.01',
  hostUser: {
    displayName: 'Test User',
    uniqueName: 'testuser',
    picture: random.icon(),
  },
  followingUsers: {
    pageInfo: {hasMore: true, endCursor: 'A'},
    users: Array.from({length: 23}).map((_, j) => ({
      displayName: `Test User ${j + 1}`,
      uniqueName: `testuser${j + 1}`,
      picture: random.icon(j + 1),
    })),
  },
};
