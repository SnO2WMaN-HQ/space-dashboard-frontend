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
  TemplateSpacePage,
  transform,
} from '~/template/Space';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllSpacePages()
    .then(({allSpaces}) => allSpaces.map(({id}) => ({params: {id}})))
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<StaticPropsUserPage, UrlQuery> =
  async ({params}) => {
    if (!params) throw new Error('Invalid parameters.');
    return graphqlSdk
      .SpacePages({id: params.id})
      .then((data) => ({props: transform(data), revalidate: 60}))
      .catch(() => ({notFound: true}));
  };

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  return <TemplateSpacePage {...props} />;
};

export default Page;
