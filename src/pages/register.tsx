import {useUser, withPageAuthRequired} from '@auth0/nextjs-auth0';
import {GetServerSidePropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useCurrentUser} from '~/hooks/useCurrentUser';
import {NextI18nextConfig} from '~/i18n';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateRegisterPage, transform} from '~/template/Register';

export type UrlQuery = Record<string, never>;
export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext<UrlQuery>) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(
          locale,
          ['common', 'register'],
          NextI18nextConfig,
        ))),
    },
  };
};

export type PageProps = {className?: string};
const Page: NextPage<PageProps> = ({className, ...props}) => {
  const router = useRouter();
  const current = useCurrentUser();
  const {t} = useTranslation();
  const {user: auth0Profile} = useUser();

  useEffect(() => {
    if ('status' in current && current.status === 'registered')
      router.push('/timeline');
  }, [current, router]);

  if ('status' in current && current.status === 'unregistered')
    return (
      <>
        <Head>
          <title>{t('head_title.register')}</title>
        </Head>
        <TemplateRegisterPage
          className={className}
          {...transform(auth0Profile)}
        />
      </>
    );
  return <TemplateLoadingPage className={className} />;
};
export default withPageAuthRequired(Page);
