import React, {useEffect, useState} from 'react';
import {
  useSpacePageFollowSpaceMutation,
  useSpacePageSpaceStatusQuery,
} from '~/graphql/apollo';
import {Component} from './Component';

export const useSpaceStatus = ({
  spaceId,
}: {
  spaceId: string;
}):
  | {loading: true}
  | {loading: false; isHost: true}
  | {loading: false; isHost: false; isFollowing: true}
  | {
      loading: false;
      isHost: false;
      isFollowing: false;
      onClick(): void;
      changing: boolean;
    } => {
  const {data} = useSpacePageSpaceStatusQuery({
    variables: {spaceId},
  });
  const [followMutation, {loading: followLoading}] =
    useSpacePageFollowSpaceMutation();

  const [status, setStatus] =
    useState<
      | undefined
      | {userId: string; isHost: true}
      | {userId: string; isHost: false; isFollowing: true}
      | {userId: string; isHost: false; isFollowing: false}
    >();

  useEffect(() => {
    if (data?.currentUser && data.currentUser.isHostSpace)
      setStatus({
        userId: data.currentUser.id,
        isHost: true,
      });
    else if (data?.currentUser && !data.currentUser.isHostSpace)
      setStatus({
        userId: data.currentUser.id,
        isHost: false,
        isFollowing: data.currentUser.isFollowingSpace,
      });
  }, [data]);

  if (!status) return {loading: true};
  else if (status.isHost) return {loading: false, isHost: true};
  else if (status.isFollowing)
    return {loading: false, isHost: false, isFollowing: true};
  else
    return {
      loading: false,
      isHost: false,
      isFollowing: false,
      changing: followLoading,
      onClick: () =>
        followMutation({variables: {spaceId, userId: status.userId}}).then(
          () => {
            setStatus({
              isHost: false,
              isFollowing: true,
              userId: status.userId,
            });
          },
        ),
    };
};

export type ContainerProps = {
  className?: string;
  spaceId: string;
};
export const Container: React.VFC<ContainerProps> = ({spaceId, ...props}) => {
  const status = useSpaceStatus({spaceId});

  if ('changing' in status && status.changing)
    return <Component {...props} state="changing" />;
  else if ('isHost' in status && status.isHost)
    return <Component {...props} state="hostSame" />;
  else if ('isFollowing' in status && !status.isFollowing)
    return (
      <Component
        {...props}
        state="unfollowing"
        handlePressed={status.onClick}
      />
    );
  else if ('isFollowing' in status && status.isFollowing)
    return <Component {...props} state="following" />;
  return <></>;
};
