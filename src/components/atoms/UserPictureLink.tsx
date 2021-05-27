import React from 'react';
import {tw} from 'twind';
import {LinkUser} from './Link';
import {UserPicture} from './UserPicture';

export const UserPictureLink: React.VFC<{
  className?: string;
  uniqueName: string;
  picture: string;
  displayName: string;
}> = ({className, uniqueName, displayName, picture}) => (
  <LinkUser className={tw(className)} query={{unique: uniqueName}}>
    <UserPicture
      className={tw('w-full', 'h-full')}
      {...{picture, displayName}}
    />
  </LinkUser>
);
