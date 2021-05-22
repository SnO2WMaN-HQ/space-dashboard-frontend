import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <div
      className={tw(
        className,
        ['inline-flex', 'justify-center', 'items-center'],
        ['bg-purple-400'],
        ['text-white', 'text-lg'],
      )}
      aria-label={t('space:follow.loading')}
    >
      <FontAwesomeIcon className={tw()} icon={faCircleNotch} spin fixedWidth />
      <span className={tw('ml-2', 'font-bold', 'tracking-wider')}>
        {t('space:follow.loading')}
      </span>
    </div>
  );
};
