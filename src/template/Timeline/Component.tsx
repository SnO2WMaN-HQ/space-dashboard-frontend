import React from 'react';
import {tw} from 'twind';
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
    <main className={tw(className, 'bg-gray-200', 'py-4')}>
      <div className={tw('w-full', 'px-2', 'grid', 'grid-cols-1', 'gap-y-4')}>
        <SectionProfile
          className={tw()}
          {...{displayName, picture, uniqueName}}
        />
        <SectionNewSpace
          className={tw()}
          {...{displayName, picture, uniqueName}}
        />
        <SectionHostedSpaces
          className={tw()}
          spaces={hostedSpaces.spaces}
          pageInfo={hostedSpaces.pageInfo}
        />
        <SectionFollowingSpaces
          className={tw()}
          spaces={followingSpaces.spaces}
          pageInfo={followingSpaces.pageInfo}
        />
      </div>
    </main>
  );
};
