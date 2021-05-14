import clsx from 'clsx';
import React from 'react';

export const BlockMinutes: React.VFC<{
  className?: string;
  minutesUrl: string;
}> = ({className, minutesUrl}) => (
  <div className={clsx(className)}>
    <p className={clsx('font-bold')}>議事録</p>
    <p className={clsx('mt-2', 'block', 'truncate')}>
      <a className={clsx('text-blue-400', 'underline')} href={minutesUrl}>
        {minutesUrl}
      </a>
    </p>
  </div>
);
