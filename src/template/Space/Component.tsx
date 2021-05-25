import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {PageLayout} from '~/components/layouts/PageLayout';
import {Header} from './organisms/Header';
import {SectionDetails} from './organisms/SectionDetails';
import {SectionUsers} from './organisms/SectionUsers';
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
        <Header
          className={tw(['col-span-1', 'md:col-span-2'])}
          {...{
            title,
            hostUser,
          }}
        />
        <SectionDetails
          className={tw('col-span-1')}
          {...{
            description,
            minutesUrl,
            finished,
            openDate,
          }}
        />
        <SectionUsers
          className={tw('col-span-1')}
          {...{
            hostUser,
            followingUsers,
          }}
        />
      </main>
    </PageLayout>
  );
};
