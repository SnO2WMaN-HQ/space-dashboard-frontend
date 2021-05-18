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
import {TemplateUserPage, transform, TransformedProps} from '~/template/User';
// eslint-disable-next-line import/extensions
import nextI18NextConfig from '~~/next-i18next.config.js';

export type UrlQuery = {
  unique: string;
};

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

export const getStaticProps: GetStaticProps<TransformedProps, UrlQuery> =
  async ({locale, params}) => {
    if (!params?.unique) throw new Error('Invalid parameters.');

    return graphqlSdk
      .UserPage({unique: params.unique})
      .then((data) => transform(data))
      .then(async (props) => ({
        props: {
          ...props,
          ...(locale &&
            (await serverSideTranslations(
              locale,
              ['common', 'user'],
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
export const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  const {t} = useTranslation();

  if (router.isFallback) return <TemplateLoadingPage />;
  return (
    <>
      <Head>
        <title>
          {t('title.user', {
            uniqueName: props.uniqueName,
            displayName: props.displayName,
          })}
        </title>
      </Head>
      <TemplateUserPage {...props} />
    </>
  );
};

export default Page;
