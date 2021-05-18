import clsx from 'clsx';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import {Merge} from 'type-fest';
import {graphqlSdk} from '~/graphql/graphql-request';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateSpacePage, transform, TransformedProps} from '~/template/Space';
// eslint-disable-next-line import/extensions
import nextI18NextConfig from '~~/next-i18next.config.js';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllSpacePages()
    .then(({allSpaces}) => allSpaces.map(({id}) => ({params: {id}})))
    .then((paths) => ({paths, fallback: true}));
};

export const getStaticProps: GetStaticProps<TransformedProps, UrlQuery> =
  async ({params, locale}) => {
    if (!params?.id) throw new Error('Invalid parameters.');
    return graphqlSdk
      .SpacePages({id: params.id})
      .then((data) => transform(data))
      .then(async (props) => ({
        props: {
          ...props,
          ...(locale &&
            (await serverSideTranslations(
              locale,
              ['common', 'space'],
              nextI18NextConfig,
            ))),
        },
        revalidate: 10,
      }))
      .catch(() => ({notFound: true}));
  };

export type PageProps = Merge<
  {className?: string},
  InferGetStaticPropsType<typeof getStaticProps>
>;
export const Page: NextPage<PageProps> = ({className, ...props}) => {
  const router = useRouter();
  const {t} = useTranslation();

  if (router.isFallback)
    return <TemplateLoadingPage className={clsx(className)} />;
  return (
    <>
      <Head>
        <title>
          {t('title.space', {
            hostName: props.hostUser.displayName,
            title: props.title,
          })}
        </title>
      </Head>
      <TemplateSpacePage className={clsx(className)} {...props} />
    </>
  );
};

export default Page;
