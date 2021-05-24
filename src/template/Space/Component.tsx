import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {PageLayout} from '~/components/layouts/PageLayout';
import {SectionSpace} from './organisms/SectionSpace';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<{className?: string}, TransformedProps>;
export const Component: React.VFC<ComponentProps> = ({
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
    <PageLayout className={tw(className)}>
      <main
        className={tw(
          'w-full',
          ['grid'],
          ['grid-cols-1', 'md:grid-cols-2'],
          ['md:gap-x-4'],
          ['gap-y-4'],
        )}
      >
        <SectionSpace
          className={tw('col-span-2')}
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
      </main>
    </PageLayout>
  );
};
