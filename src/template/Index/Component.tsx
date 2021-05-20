import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {SectionIndex} from './organisms/SectionIndex';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation('index');
  return (
    <main className={clsx(className)}>
      <SectionIndex className={clsx('min-h-screen')} />
    </main>
  );
};
