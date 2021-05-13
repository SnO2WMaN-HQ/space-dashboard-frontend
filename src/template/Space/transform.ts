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
    count: number;
    hasMore: boolean;
    nodes: {uniqueName: string; displayName: string; picture: string}[];
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
    count: space.followingUsers.length,
    hasMore: false,
    nodes: space.followingUsers.map(({user: followingUser}) => ({
      uniqueName: followingUser.uniqueName,
      displayName: followingUser.displayName,
      picture: followingUser.picture,
    })),
  },
});
