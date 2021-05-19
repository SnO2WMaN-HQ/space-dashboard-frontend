import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';

export type ComponentProps = {
  className?: string;
};

export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation('common');

  return (
    <label className={clsx(className, 'inline-flex')} htmlFor="submit">
      <input
        id="submit"
        className={clsx(
          'mx-auto',
          'py-3',
          'px-6',
          'rounded-sm',
          'shadow-sm',
          'font-bold',
          'tracking-wider',
          {
            'text-white': true,
            'bg-blue-400': true,
            'hover:bg-blue-500': true,
          },
        )}
        aria-label={t('signup')}
        value={t('signup') as string}
        type="submit"
      />
    </label>
  );
};
