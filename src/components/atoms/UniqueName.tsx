import React from 'react';
import {tw} from 'twind';

export const UniqueName: React.VFC<{
  className?: string;
  uniqueName: string;
}> = ({className, uniqueName}) => (
  <span className={tw(className, 'leading-none')}>@{uniqueName}</span>
);
