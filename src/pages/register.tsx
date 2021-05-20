import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {GetServerSidePropsContext, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useCurrentUser} from '~/hooks/useCurrentUser';
import {NextI18nextConfig} from '~/i18n';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplateRegisterPage} from '~/template/Register';

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
  const {loading, currentUser} = useCurrentUser();
  const {t} = useTranslation();

  useEffect(() => {
    if (!loading && Boolean(currentUser)) router.push('/timeline');
  }, [currentUser, loading, router]);

  if (loading || Boolean(currentUser))
    return <TemplateLoadingPage className={className} />;

  return (
    <>
      <Head>
        <title>{t('title.register')}</title>
      </Head>
      <TemplateRegisterPage className={className} />
    </>
  );
};
export default withPageAuthRequired(Page);
