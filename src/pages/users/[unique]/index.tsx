import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';
import {graphqlSdk} from '~/graphql/graphql-request';
import {
  StaticPropsUserPage,
  TemplateUserPage,
  transform,
} from '~/template/User';

export type UrlQuery = {unique: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllUserPages()
    .then(({allUsers}) =>
      allUsers.map(({uniqueName}) => ({params: {unique: uniqueName}})),
    )
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<StaticPropsUserPage, UrlQuery> =
  async ({params}) => {
    if (!params) throw new Error('Invalid parameters.');
    return graphqlSdk
      .UserPage({unique: params.unique})
      .then((data) => ({props: transform(data), revalidate: 60}))
      .catch(() => ({notFound: true}));
  };

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  return <TemplateUserPage {...props} />;
};

export default Page;
