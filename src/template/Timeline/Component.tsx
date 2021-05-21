import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {SectionFollowingSpaces} from '../User/organisms/SectionFollowingSpaces';
import {SectionHostedSpaces} from '../User/organisms/SectionHostedSpaces';
import {SectionProfile} from '../User/organisms/SectionProfile';
import {SectionNewSpace} from './organisms/SectionNewSpace';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<{className?: string}, TransformedProps>;
export const Component: React.VFC<ComponentProps> = ({
  className,
  displayName,
  uniqueName,
  picture,
  hostedSpaces,
  followingSpaces,
}) => {
  return (
    <main className={clsx(className, 'bg-gray-200', 'py-4')}>
      <div className={clsx('w-full', 'px-2', 'grid', 'grid-cols-1', 'gap-y-4')}>
        <SectionProfile
          className={clsx()}
          {...{displayName, picture, uniqueName}}
        />
        <SectionNewSpace
          className={clsx()}
          {...{displayName, picture, uniqueName}}
        />
        <SectionHostedSpaces
          className={clsx()}
          spaces={hostedSpaces.spaces}
          pageInfo={hostedSpaces.pageInfo}
        />
        <SectionFollowingSpaces
          className={clsx()}
          spaces={followingSpaces.spaces}
          pageInfo={followingSpaces.pageInfo}
        />
      </div>
    </main>
  );
};
