import {ApolloProvider} from '@apollo/client';
import {UserProvider} from '@auth0/nextjs-auth0';
import clsx from 'clsx';
import {appWithTranslation} from 'next-i18next';
import {AppProps} from 'next/app';
import React from 'react';
import {RecoilRoot} from 'recoil';
import {createApolloClient} from '~/graphql/apollo';
import '~/styles/index.css';
// eslint-disable-next-line import/extensions
import nextI18NextConfig from '~~/next-i18next.config.js';

export const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const {user} = pageProps;

  return (
    <UserProvider user={user}>
      <ApolloProvider client={createApolloClient()}>
        <RecoilRoot>
          <Component {...pageProps} className={clsx('min-h-screen')} />
        </RecoilRoot>
      </ApolloProvider>
    </UserProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
