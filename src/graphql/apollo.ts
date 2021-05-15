import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {API_GRAPHQL_ENDPOINT} from '~/configs/env';

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: API_GRAPHQL_ENDPOINT,
    credentials: 'include',
  });

  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
};

export * from './codegen/apollo';
