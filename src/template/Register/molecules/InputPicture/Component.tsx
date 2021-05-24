import {useTranslation} from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  src: string;
};
export const Component: React.VFC<ComponentProps> = ({
  src,
  className,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className, ['flex', 'justify-center', 'items-center'])}>
      <div
        className={tw(['w-16', 'h-16'], ['rounded-full', 'overflow-hidden'])}
      >
        <Image className={tw()} src={src} width={256} height={256} />
      </div>
    </div>
  );
};
