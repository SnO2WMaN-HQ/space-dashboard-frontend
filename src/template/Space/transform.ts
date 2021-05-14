import {SpacePagesQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  id: string;

  title: string;
  description?: string;
  minutesUrl?: string;

  finished: boolean;

  openDate: string;

  hostedUser: {
    uniqueName: string;
    displayName: string;
    picture: string;
  };
  followingUsers: {
    pageInfo: {hasMore: false} | {hasMore: true; endCursor: string};
    users: {uniqueName: string; displayName: string; picture: string}[];
  };
};

export const transform = ({space}: SpacePagesQuery): TransformedProps => ({
  id: space.id,

  title: space.title,

  openDate: space.openDate,

  ...{...(space.description ? {description: space.description} : {})},

  finished: space.finished,
  hostedUser: {
    uniqueName: space.hostUser.user.uniqueName,
    displayName: space.hostUser.user.displayName,
    picture: space.hostUser.user.picture,
  },
  followingUsers: {
    pageInfo: space.followingUsers.pageInfo.endCursor
      ? {hasMore: true, endCursor: space.followingUsers.pageInfo.endCursor}
      : {hasMore: false},
    users: space.followingUsers.edges.map(({node: {user: followingUser}}) => ({
      uniqueName: followingUser.uniqueName,
      displayName: followingUser.displayName,
      picture: followingUser.picture,
    })),
  },
});
