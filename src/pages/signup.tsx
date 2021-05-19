import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import clsx from 'clsx';
import {GetServerSidePropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import {NextI18nextConfig} from '~/i18n';
import {TemplateSignUpPage} from '~/template/SignUp';

export type UrlQuery = {[key: string]: never};
export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext<UrlQuery>) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(
          locale,
          ['common', 'signup'],
          NextI18nextConfig,
        ))),
    },
  };
};

export type PageProps = {className?: string};
const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('title.signup')}</title>
      </Head>
      <TemplateSignUpPage className={clsx()} />
    </>
  );
};
export default withPageAuthRequired(Page);
