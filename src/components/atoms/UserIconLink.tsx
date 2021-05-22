import NextLink from 'next/link';
import React from 'react';
import {tw} from 'twind';
import {UserIcon} from './UserIcon';

export const UserIconLink: React.VFC<{
  className?: string;
  uniqueName: string;
  picture: string;
  displayName: string;
}> = ({className, uniqueName, displayName, picture}) => (
  <NextLink href={`/users/${uniqueName}`}>
    <a className={tw(className)}>
      <UserIcon
        className={tw('w-full', 'h-full')}
        {...{picture, displayName}}
      />
    </a>
  </NextLink>
);
