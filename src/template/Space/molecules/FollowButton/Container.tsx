import React from 'react';
import {
  useSpacePageFollowSpaceMutation,
  useSpacePageIsFollowingSpaceQuery,
} from '~/graphql/apollo';

/*
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
*/
export const useIsFollowingSpace = (spaceId: string) => {
  const {data, loading} = useSpacePageIsFollowingSpaceQuery({
    variables: {spaceId},
  });
  return data?.currentUser?.isFollowingSpace;
};

export const useFollowSpace = () => {
  const [mutation] = useSpacePageFollowSpaceMutation();

  const followSpace = mutation;

  return [followSpace];
};

export type ContainerProps = {
  className?: string;
  spaceId: string;
};
export const Container: React.VFC<ContainerProps> = ({spaceId, ...props}) => {
  const isFollowingSpace = useIsFollowingSpace(spaceId);
  const [followSpace] = useFollowSpace();

  return <div />;
};
