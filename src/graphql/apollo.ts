import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

export const createApolloClient = () => {
  const httpLink = createHttpLink({uri: '/api/graphql'});

  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
};

export * from './codegen/apollo';
