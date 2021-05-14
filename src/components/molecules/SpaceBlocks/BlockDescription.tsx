import clsx from 'clsx';
import React from 'react';

export const BlockDescription: React.VFC<{
  className?: string;
  description: string;
}> = ({className, description}) => (
  <div className={clsx(className)}>
    <p className={clsx('font-bold')}>説明文</p>
    <p className={clsx('mt-2')}>{description}</p>
  </div>
);
