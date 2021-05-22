import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {SectionIndex} from './organisms/SectionIndex';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation('index');
  return (
    <main className={tw(className)}>
      <SectionIndex className={tw('min-h-screen')} />
    </main>
  );
};
