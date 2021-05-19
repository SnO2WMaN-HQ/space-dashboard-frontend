import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {SectionSpace} from './organisms/SectionSpace';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<{className?: string}, TransformedProps>;
export const Component: React.FC<ComponentProps> = ({
  children,
  className,
  id,
  title,
  description,
  minutesUrl,
  finished,
  openDate,
  hostUser,
  followingUsers,
}) => {
  return (
    <main className={clsx(className, 'bg-gray-200', 'py-4')}>
      {children}
      <div className={clsx('px-2')}>
        <SectionSpace
          {...{
            id,
            title,
            description,
            minutesUrl,
            finished,
            openDate,
            hostUser,
            followingUsers,
          }}
        />
      </div>
    </main>
  );
};
