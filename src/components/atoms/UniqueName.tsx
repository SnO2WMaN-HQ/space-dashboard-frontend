import clsx from 'clsx';
import React from 'react';

export const UniqueName: React.VFC<{
  className?: string;
  uniqueName: string;
}> = ({className, uniqueName}) => (
  <span className={clsx(className, 'leading-none')}>@{uniqueName}</span>
);
