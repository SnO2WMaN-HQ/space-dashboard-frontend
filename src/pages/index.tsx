import {GetStaticPropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import {tw} from 'twind';
import {NextI18nextConfig} from '~/i18n';
import {TemplateIndexPage} from '~/template/Index';

export type UrlQuery = Record<string, never>;
export const getStaticProps = async ({
  locale,
}: GetStaticPropsContext<UrlQuery>) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(
          locale,
          ['common', 'index'],
          NextI18nextConfig,
        ))),
    },
  };
};

export type PageProps = {
  className?: string;
};
const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{t('head_title.index')}</title>
      </Head>
      <TemplateIndexPage className={tw(className)} />
    </>
  );
};
export default Page;
