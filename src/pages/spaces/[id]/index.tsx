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
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {graphqlSdk} from '~/graphql/graphql-request';
import {NextI18nextConfig} from '~/i18n';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateSpacePage, transform, TransformedProps} from '~/template/Space';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllSpacePages()
    .then(({allSpaces}) => allSpaces.map(({id}) => ({params: {id}})))
    .then((paths) => ({paths, fallback: 'blocking'}));
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
              NextI18nextConfig,
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
    return <TemplateLoadingPage className={tw(className)} />;
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
      <TemplateSpacePage className={tw(className)} {...props} />
    </>
  );
};

export default Page;
