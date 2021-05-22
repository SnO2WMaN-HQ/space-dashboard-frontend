import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {
  useFollowSpaceMutation,
  useIsSpaceFollowingLazyQuery,
} from '~/graphql/apollo';
import {useCurrentUser2} from '~/hooks/useCurrentUser';
import {Component} from './Component';

export const useIsCurrentUserFollowingSpace = ({
  spaceId,
  hostUserId,
}: {
  spaceId: string;
  hostUserId: string;
}):
  | {spaceId: string; userId: string; isFollowing: boolean}
  | {spaceId: string; userId: string; isHost: true}
  | null => {
  const currentUser = useCurrentUser2();

  const [isFollowingSpace, {data, loading, called}] =
    useIsSpaceFollowingLazyQuery();

  useEffect(() => {
    if (!called && currentUser) isFollowingSpace({variables: {spaceId}});
  }, [spaceId, called, currentUser, isFollowingSpace, hostUserId]);

  if (currentUser && currentUser.id === hostUserId)
    return {
      spaceId,
      userId: currentUser.id,
      isHost: true,
    };
  else if (currentUser && !loading && data?.currentUser)
    return {
      spaceId,
      userId: currentUser.id,
      isFollowing: data.currentUser.isFollowingSpace,
    };
  else return null;
};

export type ContainerProps = {
  className?: string;
  spaceId: string;
  hostUserId: string;
};
export const Container: React.VFC<ContainerProps> = ({
  spaceId,
  hostUserId,
  ...props
}) => {
  const router = useRouter();
  const status = useIsCurrentUserFollowingSpace({spaceId, hostUserId});
  const [followSpace, {called}] = useFollowSpaceMutation();

  if (status && 'isHost' in status) return <></>;
  else if (called) return <Component {...props} pressed={called} />;
  else if (status && 'isFollowing' in status && status.isFollowing)
    return <Component {...props} following />;
  else if (status && 'isFollowing' in status && !status.isFollowing)
    return (
      <Component
        {...props}
        following={false}
        handlePressed={async () =>
          followSpace({
            variables: {
              spaceId: status.spaceId,
              userId: status.userId,
            },
          }).then(() => router.reload())
        }
      />
    );
  else return <></>;
};
