import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {GetServerSidePropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Error from 'next/error';
import Head from 'next/head';
import React from 'react';
import {usePersonalPageQuery} from '~/graphql/apollo';
import {withPageSignedUp} from '~/hoc/withPageSignedUp';
import {NextI18nextConfig} from '~/i18n';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateTimelinePage, transform} from '~/template/Timeline';

export type UrlQuery = Record<string, never>;
export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext<UrlQuery>) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(
          locale,
          ['common', 'user', 'timeline'],
          NextI18nextConfig,
        ))),
    },
  };
};

export type PageProps = {
  className?: string;
};
const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {data, loading, error} = usePersonalPageQuery();
  const {t} = useTranslation();

  if (error) return <Error statusCode={500} />;
  if (data && data.currentUser)
    return (
      <>
        <Head>
          <title>{t('head_title.timeline')}</title>
        </Head>
        <TemplateTimelinePage
          className={className}
          {...transform(data.currentUser)}
        />
      </>
    );
  if (loading) return <TemplateLoadingPage className={className} />;
  return <Error statusCode={500} />;
};
export default withPageSignedUp(withPageAuthRequired(Page));
