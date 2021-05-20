import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {RegisterButton} from '../../molecules';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation('index');
  return (
    <section
      className={clsx(
        className,
        'px-2',
        ['flex', 'flex-col', 'justify-center', 'items-center'],
        'bg-gradient-to-tr',
        ['from-blue-200', 'via-indigo-200', 'to-purple-200'],
      )}
    >
      <div
        className={clsx(
          ['py-12', 'px-8'],
          ['bg-white', 'bg-opacity-75'],
          ['flex', 'flex-col', 'justify-center', 'items-center'],
          'rounded-lg',
        )}
      >
        <div
          className={clsx(
            ['w-20', 'h-20'],
            ['flex', 'justify-center', 'items-center'],
            'bg-gradient-to-tr',
            ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
            'shadow-sm',
            'rounded-full',
          )}
        >
          <FontAwesomeIcon
            className={clsx('text-white', 'text-4xl')}
            icon={faUserAstronaut}
          />
        </div>
        <div
          className={clsx('max-w-sm', 'mt-4', [
            'flex',
            'flex-col',
            'justify-center',
          ])}
        >
          <h1 className={clsx('text-center', 'inline-flex', 'flex-col')}>
            <span
              className={clsx('text-3xl', 'font-bold', 'whitespace-nowrap')}
            >
              {t('index:title.short')}
            </span>
            <span className={clsx('text-base', 'whitespace-nowrap')}>
              {t('index:title.long')}
            </span>
          </h1>
          <h2 className={clsx('text-center', 'text-sm', 'mt-2')}>
            {t('index:description')}
          </h2>
        </div>
        <RegisterButton className={clsx('mt-8')} />
      </div>
    </section>
  );
};
