import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {PageLayout} from '~/components/layouts/PageLayout';
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
    <PageLayout className={tw(className)}>
      <main
        className={tw(
          className,
          'w-full',
          ['grid'],
          ['grid-cols-1', 'md:grid-cols-2'],
          ['md:gap-x-4'],
          ['gap-y-4'],
        )}
      >
        <SectionProfile
          className={tw('col-span-2')}
          {...{displayName, picture, uniqueName}}
        />
        <SectionNewSpace
          className={tw('col-span-2')}
          {...{displayName, picture, uniqueName}}
        />
        <SectionHostedSpaces
          className={tw('col-span-1', 'col-start-1')}
          spaces={hostedSpaces.spaces}
          pageInfo={hostedSpaces.pageInfo}
        />
        <SectionFollowingSpaces
          className={tw('col-span-1', 'col-start-2')}
          spaces={followingSpaces.spaces}
          pageInfo={followingSpaces.pageInfo}
        />
      </main>
    </PageLayout>
  );
};
