import {ApolloProvider} from '@apollo/client';
import {UserProvider} from '@auth0/nextjs-auth0';
import {appWithTranslation} from 'next-i18next';
import {AppProps} from 'next/app';
import React from 'react';
import {RecoilRoot} from 'recoil';
import 'tailwindcss/tailwind.css';
import {tw} from 'twind';
import {createApolloClient} from '~/graphql/apollo';
import {NextI18nextConfig} from '~/i18n';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const {user} = pageProps;

  return (
    <UserProvider user={user}>
      <ApolloProvider client={createApolloClient()}>
        <RecoilRoot>
          <Component {...pageProps} className={tw('min-h-screen')} />
        </RecoilRoot>
      </ApolloProvider>
    </UserProvider>
  );
};

export default appWithTranslation(App, NextI18nextConfig);
