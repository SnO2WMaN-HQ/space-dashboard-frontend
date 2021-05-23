import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <div
      className={tw(
        className,
        ['inline-flex', 'justify-center', 'items-center'],
        'bg-gradient-to-r',
        ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
        ['text-white', 'text-lg'],
      )}
    >
      <span className={tw(['font-bold', 'tracking-wider'])}>
        {t('space:follow.following')}
      </span>
    </div>
  );
};
