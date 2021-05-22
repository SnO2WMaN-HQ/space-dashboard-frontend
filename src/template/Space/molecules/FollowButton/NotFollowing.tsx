import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  handlePressed(): void;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  handlePressed,
}) => {
  const {t} = useTranslation();
  return (
    <button
      type="button"
      className={tw(
        className,
        ['inline-flex', 'justify-center', 'items-center'],
        ['bg-blue-400', 'hover:bg-blue-500'],
        ['text-white', 'text-lg'],
      )}
      onClick={handlePressed}
    >
      <span className={tw(['font-bold', 'tracking-wider'])}>
        {t('space:follow.not_following')}
      </span>
    </button>
  );
};
