import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {SectionProfile} from './organisms/SectionProfile';
import {Following, Hosting} from './organisms/SectionSpaces/Container';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
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
        <Hosting
          className={clsx('w-full')}
          spaces={hostedSpaces.spaces}
          pageInfo={hostedSpaces.pageInfo}
        />
        <Following
          className={clsx('w-full', 'mt-4')}
          spaces={followingSpaces.spaces}
          pageInfo={followingSpaces.pageInfo}
        />
      </div>
    </main>
  );
};
