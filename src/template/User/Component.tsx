import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {PageLayout} from '~/components/layouts/PageLayout';
import {SectionFollowingSpaces} from './organisms/SectionFollowingSpaces';
import {SectionHostedSpaces} from './organisms/SectionHostedSpaces';
import {SectionProfile} from './organisms/SectionProfile';
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
    <PageLayout
      className={tw(
        className,
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
      <SectionHostedSpaces
        className={tw('col-span-1')}
        spaces={hostedSpaces.spaces}
        pageInfo={hostedSpaces.pageInfo}
      />
      <SectionFollowingSpaces
        className={tw('col-span-1')}
        spaces={followingSpaces.spaces}
        pageInfo={followingSpaces.pageInfo}
      />
    </PageLayout>
  );
};
