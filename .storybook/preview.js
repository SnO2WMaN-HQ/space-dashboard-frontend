import {addDecorator} from '@storybook/react';
import * as nextImage from 'next/image';
import {withNextRouter} from 'storybook-addon-next-router';
import 'tailwindcss/tailwind.css';

addDecorator(withNextRouter());

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  storySort: {
    method: 'alphabetical',
  },
};
