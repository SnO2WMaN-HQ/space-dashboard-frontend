import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {SectionFollowingSpaces} from './organisms/SectionFollowingSpaces';
import {SectionHostedSpaces} from './organisms/SectionHostedSpaces';
import {SectionProfile} from './organisms/SectionProfile';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<{className?: string}, TransformedProps>;
export const Component: React.FC<ComponentProps> = ({
  children,
  className,
  displayName,
  uniqueName,
  picture,
  hostedSpaces,
  followingSpaces,
}) => {
  return (
    <main className={clsx(className, 'bg-gray-200', 'py-4')}>
      {children}
      <div className={clsx('w-full', 'px-2')}>
        <SectionProfile
          className={clsx('w-full')}
          {...{displayName, picture, uniqueName}}
        />
      </div>
      <div className={clsx('mt-4', 'px-2')}>
        <SectionHostedSpaces
          className={clsx('w-full')}
          spaces={hostedSpaces.spaces}
          pageInfo={hostedSpaces.pageInfo}
        />
        <SectionFollowingSpaces
          className={clsx('w-full', 'mt-4')}
          spaces={followingSpaces.spaces}
          pageInfo={followingSpaces.pageInfo}
        />
      </div>
    </main>
  );
};
