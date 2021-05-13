import {ApolloProvider} from '@apollo/client';
import clsx from 'clsx';
import {Provider} from 'next-auth/client';
import {AppProps} from 'next/dist/next-server/lib/router/router';
import React from 'react';
import {RecoilRoot} from 'recoil';
import 'tailwindcss/tailwind.css';
import {createApolloClient} from '~/graphql/apollo';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({Component, pageProps}) => (
  <ApolloProvider client={createApolloClient()}>
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} className={clsx('min-h-screen')} />
      </RecoilRoot>
    </Provider>
  </ApolloProvider>
);

export default App;
