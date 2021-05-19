import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {GetServerSidePropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Error from 'next/error';
import Head from 'next/head';
import React from 'react';
import {usePersonaPageQuery} from '~/graphql/apollo';
import {NextI18nextConfig} from '~/i18n';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplatePersonalPage, transform} from '~/template/Personal';

export type UrlQuery = {[key: string]: never};
export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext<UrlQuery>) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(
          locale,
          ['common', 'user'],
          NextI18nextConfig,
        ))),
    },
  };
};

export type PageProps = {
  className?: string;
};
const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {data, loading, error} = usePersonaPageQuery();
  const {t} = useTranslation();

  if (error) return <Error statusCode={500} />;
  if (data)
    return (
      <>
        <Head>
          <title>{t('title.timeline')}</title>
        </Head>
        <TemplatePersonalPage className={className} {...transform(data)} />
      </>
    );
  if (loading) return <TemplateLoadingPage className={className} />;
  return <Error statusCode={500} />;
};
export default withPageAuthRequired(Page);
