import clsx from 'clsx';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import {Merge} from 'type-fest';
import {graphqlSdk} from '~/graphql/graphql-request';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateSpacePage, transform, TransformedProps} from '~/template/Space';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllSpacePages()
    .then(({allSpaces}) => allSpaces.map(({id}) => ({params: {id}})))
    .then((paths) => ({paths, fallback: true}));
};

export const getStaticProps: GetStaticProps<TransformedProps, UrlQuery> =
  async ({params}) => {
    if (!params?.id) throw new Error('Invalid parameters.');
    return graphqlSdk
      .SpacePages({id: params.id})
      .then((data) => transform(data))
      .then((props) => ({props, revalidate: 10}))
      .catch(() => ({notFound: true}));
  };

export type PageProps = Merge<
  {className?: string},
  InferGetStaticPropsType<typeof getStaticProps>
>;
export const Page: NextPage<PageProps> = ({className, ...props}) => {
  const router = useRouter();

  if (router.isFallback)
    return <TemplateLoadingPage className={clsx(className)} />;
  return (
    <>
      <Head>
        <title>
          {props.hostedUser.displayName}の『{props.title}』/ twISS
        </title>
      </Head>
      <TemplateSpacePage className={clsx(className)} {...props} />
    </>
  );
};

export default Page;
