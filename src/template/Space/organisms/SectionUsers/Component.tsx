import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {SectionFrame} from '~/template/User/atoms/SectionFrame';
import {BlockFollowingUsers} from '../../molecules/BlockFollowingUsers';
import {BlockHostUser} from '../../molecules/BlockHostUser';

export type ComponentProps = {
  className?: string;
  hostUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
  followingUsers: {
    pageInfo: {hasMore: boolean; endCursor?: string};
    users: {
      id: string;
      uniqueName: string;
      displayName: string;
      picture: string;
    }[];
  };
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  hostUser,
  followingUsers,
}) => {
  const {t} = useTranslation();
  return (
    <SectionFrame
      className={tw(
        className,
        ['flex', 'flex-col'],
        ['space-y-4', 'md:space-y-6'],
      )}
    >
      <BlockHostUser className={tw()} {...{hostUser}} />
      <BlockFollowingUsers className={tw()} {...{followingUsers}} />
    </SectionFrame>
  );
};
