import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {LinkSpace} from '~/components/atoms/Link';

type ShowHostUser = {
  hostUser: {uniqueName: string; displayName: string; picture: string};
  HostUser: React.VFC<{
    className?: string;
    user: {uniqueName: string; displayName: string; picture: string};
  }>;
};

type ShowFollowingUsers = {
  followingUsers: {
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
  FollowingUsers: React.VFC<{
    className?: string;
    hasMore: boolean;
    users: {uniqueName: string; displayName: string; picture: string}[];
  }>;
};

export type ComponentProps = Merge<
  {className?: string; id: string; title: string; description?: string},
  ShowHostUser | ShowFollowingUsers | Merge<ShowHostUser, ShowFollowingUsers>
>;
export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  description,
  title,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <div
      className={tw(
        className,
        ['bg-white'],
        ['bg-opacity-70', 'hover:bg-opacity-90'],
        ['transition-colors', 'duration-200'],
        ['rounded-md', 'shadow-md'],
      )}
    >
      <LinkSpace query={{id}}>
        <p className={tw('text-lg', 'font-bold')}>{title}</p>
        {description && (
          <p className={tw(['mt-2'], 'text-sm', 'truncate')}>{description}</p>
        )}
      </LinkSpace>
      {'hostUser' in props && (
        <div className={tw('mt-4')}>
          <p className={tw('text-base', 'font-bold')}>
            {t('common:host_user')}
          </p>
          <props.HostUser className={tw('mt-4')} user={props.hostUser} />
        </div>
      )}
      {'followingUsers' in props && (
        <div className={tw('mt-4')}>
          <p className={tw('text-base', 'font-bold')}>
            {t('common:following_user', {
              count: props.followingUsers.users.length,
            })}
          </p>
          {props.followingUsers.users.length === 0 && (
            <p className={tw('text-xs', 'mt-2')}>
              {t('common:no_following_users')}
            </p>
          )}
          {props.followingUsers.users.length > 0 && (
            <props.FollowingUsers
              className={tw('mt-4')}
              users={props.followingUsers.users}
              hasMore={props.followingUsers.hasMore}
            />
          )}
        </div>
      )}
    </div>
  );
};
