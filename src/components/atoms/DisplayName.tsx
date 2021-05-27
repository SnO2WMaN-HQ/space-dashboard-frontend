import React from 'react';
import {tw} from 'twind';

export const DisplayName: React.VFC<{
  className?: string;
  displayName: string;
}> = ({className, displayName}) => (
  <span className={tw(className)}>{displayName}</span>
);
