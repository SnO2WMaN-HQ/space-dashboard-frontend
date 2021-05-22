import {SpacePagesQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  id: string;

  title: string;
  description?: string;
  minutesUrl?: string;

  finished: boolean;

  openDate: string;

  hostUser: {
    id: string;
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

export const transform = ({space}: SpacePagesQuery): TransformedProps => ({
  id: space.id,

  title: space.title,

  openDate: space.openDate,

  ...{...(space.description ? {description: space.description} : {})},

  finished: space.finished,
  hostUser: {
    id: space.hostUser.user.id,
    uniqueName: space.hostUser.user.uniqueName,
    displayName: space.hostUser.user.displayName,
    picture: space.hostUser.user.picture,
  },
  followingUsers: {
    pageInfo: {
      hasMore: space.followingUsers.pageInfo.hasNextPage,
      ...{
        ...(space.followingUsers.pageInfo.endCursor
          ? {endCursor: space.followingUsers.pageInfo.endCursor}
          : {}),
      },
    },
    users: space.followingUsers.edges.map(({node: {user: followingUser}}) => ({
      id: followingUser.id,
      uniqueName: followingUser.uniqueName,
      displayName: followingUser.displayName,
      picture: followingUser.picture,
    })),
  },
});
