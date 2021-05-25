import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  errorMessage?: string;
  i18n: {description?: string};
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  errorMessage,
  i18n,
}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className, ['space-y-2'])}>
      {i18n.description && (
        <p className={tw(['text-sm'], 'tracking-wide')}>{i18n.description}</p>
      )}
      {errorMessage && (
        <p className={tw(['text-sm'], ['font-bold'], ['text-red-600'])}>
          {t(errorMessage)}
        </p>
      )}
    </div>
  );
};
