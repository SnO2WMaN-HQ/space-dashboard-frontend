import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {GetServerSidePropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Error from 'next/error';
import Head from 'next/head';
import React from 'react';
import {useNewSpacePageQuery} from '~/graphql/apollo';
import {withPageRegisterRequired} from '~/hoc/withPageRegisterRequired';
import {NextI18nextConfig} from '~/i18n';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateNewSpacePage} from '~/template/NewSpace';
import {transform} from '~/template/NewSpace/transform';

export type UrlQuery = Record<string, never>;
export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext<UrlQuery>) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(
          locale,
          ['common', 'new'],
          NextI18nextConfig,
        ))),
    },
  };
};

export type PageProps = {
  className?: string;
};
const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {data, loading, error} = useNewSpacePageQuery();
  const {t} = useTranslation();

  if (error) return <Error statusCode={500} />;
  if (data && data.currentUser)
    return (
      <>
        <Head>
          <title>{t('head_title.new')}</title>
        </Head>
        <TemplateNewSpacePage
          className={className}
          {...transform(data.currentUser)}
        />
      </>
    );
  if (loading) return <TemplateLoadingPage className={className} />;
  return <Error statusCode={500} />;
};
export default withPageRegisterRequired(withPageAuthRequired(Page));
