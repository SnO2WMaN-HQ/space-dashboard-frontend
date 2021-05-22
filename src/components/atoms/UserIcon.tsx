import NextImage from 'next/image';
import React from 'react';
import {tw} from 'twind';

export const UserIcon: React.VFC<{
  className?: string;
  picture: string;
  displayName: string;
}> = ({className, displayName, picture}) => (
  <NextImage
    className={tw(className, 'relative', 'overflow-hidden', 'rounded-full')}
    src={picture}
    width={128}
    height={128}
    alt={displayName}
  />
);
