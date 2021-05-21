import {addDecorator} from '@storybook/react';
import * as nextImage from 'next/image';
import {I18nextProvider} from 'react-i18next';
import {withNextRouter} from 'storybook-addon-next-router';
import 'tailwindcss/tailwind.css';
import {i18nInstance} from './i18n';

addDecorator(withNextRouter());
addDecorator((storyFn) => (
  <I18nextProvider i18n={i18nInstance}>{storyFn()}</I18nextProvider>
));

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

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'jp',
    toolbar: {
      icon: 'globe',
      items: [{value: 'jp', right: '🇯🇵', title: '日本語'}],
    },
  },
};
