import {ApolloProvider} from '@apollo/client';
import {UserProvider} from '@auth0/nextjs-auth0';
import clsx from 'clsx';
import {AppProps} from 'next/app';
import React from 'react';
import {RecoilRoot} from 'recoil';
import 'tailwindcss/tailwind.css';
import {createApolloClient} from '~/graphql/apollo';
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

export default App;
