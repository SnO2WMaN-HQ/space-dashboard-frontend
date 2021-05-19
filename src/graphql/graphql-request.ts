/* eslint-disable no-process-env */

import {GraphQLClient} from 'graphql-request';
import {getSdk} from './codegen/graphql-request';

export const graphqlSdk = getSdk(
  new GraphQLClient(process.env.API_GRAPHQL_ENDPOINT!),
);
export * from './codegen/graphql-request';
