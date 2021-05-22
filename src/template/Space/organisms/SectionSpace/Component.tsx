import React from 'react';
import {tw} from 'twind';
import {Space} from '../../molecules/Space';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  description?: string;
  minutesUrl?: string;
  finished: boolean;
  openDate: string;
  hostUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
  followingUsers: {
    pageInfo: {hasMore: boolean; endCursor?: string};
    users: {
      uniqueName: string;
      displayName: string;
      picture: string;
    }[];
  };
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  finished,
  description,
  title,
  minutesUrl,
  followingUsers,
  hostUser,
  openDate,
}) => {
  return (
    <section
      className={tw(
        className,
        'bg-gray-50',
        'px-2',
        'py-2',
        'rounded-sm',
        'shadow-sm',
      )}
    >
      <div className={tw('mt-2', 'flex', 'flex-col', 'w-full', 'space-y-4')}>
        <Space
          {...{
            id,
            title,
            description,
            minutesUrl,
            finished,
            openDate,
            followingUsers,
            hostUser,
          }}
        />
      </div>
    </section>
  );
};
