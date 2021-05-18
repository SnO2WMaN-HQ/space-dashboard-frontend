import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {NextPage} from 'next';
import Error from 'next/error';
import Head from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {usePersonaPageQuery} from '~/graphql/apollo';
import {TemplateLoadingPage} from '~/template/Loading';
import {TemplatePersonalPage, transform} from '~/template/Personal';

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
          <title>{t('title:timeline')}</title>
        </Head>
        <TemplatePersonalPage className={className} {...transform(data)} />
      </>
    );
  if (loading) return <TemplateLoadingPage className={className} />;
  return <Error statusCode={500} />;
};
export default withPageAuthRequired(Page);
