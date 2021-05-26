import React from 'react';
import {tw} from 'twind';
import {LinkUser} from './Link';
import {UserIcon} from './UserIcon';

export const UserIconLink: React.VFC<{
  className?: string;
  uniqueName: string;
  picture: string;
  displayName: string;
}> = ({className, uniqueName, displayName, picture}) => (
  <LinkUser className={tw(className)} query={{unique: uniqueName}}>
    <UserIcon className={tw('w-full', 'h-full')} {...{picture, displayName}} />
  </LinkUser>
);
