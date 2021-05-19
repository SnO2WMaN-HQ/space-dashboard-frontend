import {ApolloProvider} from '@apollo/client';
import {UserProvider} from '@auth0/nextjs-auth0';
import clsx from 'clsx';
import {appWithTranslation} from 'next-i18next';
import {AppProps} from 'next/app';
import React from 'react';
import {RecoilRoot} from 'recoil';
import {createApolloClient} from '~/graphql/apollo';
import {NextI18nextConfig} from '~/i18n';
import '~/styles/index.css';

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

export default appWithTranslation(App, NextI18nextConfig);
