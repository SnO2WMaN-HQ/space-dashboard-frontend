import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {SectionFrame} from '~/template/User/atoms/SectionFrame';
import {BlockFollow} from '../../molecules/BlockFollow';
import {BlockFollowingUsers} from '../../molecules/BlockFollowingUsers';
import {BlockHostUser} from '../../molecules/BlockHostUser';

export type ComponentProps = {
  className?: string;
  id: string;
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
  id,
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
      <BlockFollow className={tw()} {...{id}} />
      <BlockHostUser className={tw()} {...{hostUser}} />
      <BlockFollowingUsers className={tw()} {...{followingUsers}} />
    </SectionFrame>
  );
};
