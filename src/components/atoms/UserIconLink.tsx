import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {UserIcon} from './UserIcon';

export const UserIconLink: React.VFC<{
  className?: string;
  uniqueName: string;
  picture: string;
  displayName: string;
}> = ({className, uniqueName, displayName, picture}) => (
  <NextLink href={`/users/${uniqueName}`}>
    <a className={clsx(className)}>
      <UserIcon
        className={clsx('w-full', 'h-full')}
        {...{picture, displayName}}
      />
    </a>
  </NextLink>
);
