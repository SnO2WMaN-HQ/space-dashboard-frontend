import {GraphQLClient} from 'graphql-request';
import {API_GRAPHQL_ENDPOINT} from '~/configs/env';
import {getSdk} from './codegen/graphql-request';

export const graphqlSdk = getSdk(new GraphQLClient(API_GRAPHQL_ENDPOINT));
export * from './codegen/graphql-request';
