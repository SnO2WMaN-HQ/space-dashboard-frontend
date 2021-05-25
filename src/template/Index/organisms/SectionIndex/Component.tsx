import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {IconTwiss} from '~/components/atoms/Icon';
import {RegisterButton} from '../../molecules';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation('index');
  return (
    <section
      className={tw(
        className,
        'px-2',
        ['flex', 'flex-col', 'justify-center', 'items-center'],
        'bg-gradient-to-tr',
        ['from-blue-200', 'via-indigo-200', 'to-purple-200'],
      )}
    >
      <div
        className={tw(
          ['py-12', 'px-8'],
          ['bg-white', 'bg-opacity-75'],
          ['flex', 'flex-col', 'justify-center', 'items-center'],
          'rounded-lg',
        )}
      >
        <div
          className={tw(
            ['w-20', 'h-20'],
            ['flex', 'justify-center', 'items-center'],
            'bg-gradient-to-tr',
            ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
            'shadow-sm',
            'rounded-full',
          )}
        >
          <IconTwiss className={tw('text-white', 'text-4xl')} />
        </div>
        <div
          className={tw('max-w-sm', 'mt-4', [
            'flex',
            'flex-col',
            'justify-center',
          ])}
        >
          <h1 className={tw('text-center', 'inline-flex', 'flex-col')}>
            <span className={tw('text-3xl', 'font-bold', 'whitespace-nowrap')}>
              {t('index:title.short')}
            </span>
            <span className={tw('text-base', 'whitespace-nowrap')}>
              {t('index:title.long')}
            </span>
          </h1>
          <h2 className={tw('text-center', 'text-sm', 'mt-2')}>
            {t('index:description')}
          </h2>
        </div>
        <RegisterButton className={tw('mt-8')} />
      </div>
    </section>
  );
};
