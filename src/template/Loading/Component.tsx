import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {IconLoading} from '~/components/atoms/Icon';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({children, className}) => {
  const {t} = useTranslation();
  return (
    <main
      className={tw(
        className,
        'bg-gray-200',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
      )}
    >
      <IconLoading className={tw('text-blue-500', 'text-6xl')} />
      <span
        className={tw(
          'mt-2',
          'text-sm',
          'tracking-wider',
          'text-gray-600',
          'font-bold',
        )}
      >
        {t('loading')}
      </span>
    </main>
  );
};
