import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <NextLink href="/new">
      <a
        className={clsx(
          className,
          'px-6',
          'py-4',
          'inline-flex',
          'items-center',
          'justify-center',
          'bg-gradient-to-r',
          ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
          [
            'hover:from-blue-500',
            'hover:via-indigo-500',
            'hover:to-purple-500',
          ],
          'rounded-md',
          'shadow-sm',
        )}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={clsx('text-white', 'text-lg')}
        />
        <span
          className={clsx('ml-4', 'text-white', 'font-bold', 'tracking-wider')}
        >
          {t('timeline:new_space')}
        </span>
      </a>
    </NextLink>
  );
};
