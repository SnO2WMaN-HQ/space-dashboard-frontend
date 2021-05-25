import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  errorMessage?: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  errorMessage,
}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className)}>
      {errorMessage && (
        <p className={tw(['text-sm'], ['font-bold'], ['text-red-600'])}>
          {t(errorMessage)}
        </p>
      )}
    </div>
  );
};
