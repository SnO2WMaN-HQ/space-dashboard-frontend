import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Space} from './molecules/Space';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  children,
  className,
  id,
  title,
  description,
  minutesUrl,
  finished,
  openDate,
  hostedUser,
  followingUsers,
}) => {
  return (
    <main className={clsx(className, 'bg-gray-200', 'py-4')}>
      {children}
      <div className={clsx('w-full', 'px-2')}>
        <Space
          {...{
            id,
            title,
            description,
            minutesUrl,
            finished,
            openDate,
            followingUsers,
            hostedUser,
          }}
        />
      </div>
    </main>
  );
};
