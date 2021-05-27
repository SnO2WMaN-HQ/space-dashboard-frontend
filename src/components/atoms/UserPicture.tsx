import NextImage from 'next/image';
import React from 'react';
import {tw} from 'twind';

export const UserPicture: React.VFC<{
  className?: string;
  picture: string;
  displayName: string;
}> = ({className, displayName, picture}) => (
  <div className={tw(className)}>
    <NextImage
      className={tw('relative', 'overflow-hidden', 'rounded-full')}
      src={picture}
      width={256}
      height={256}
      alt={displayName}
    />
  </div>
);
