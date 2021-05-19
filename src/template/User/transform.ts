import {UserPageQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  uniqueName: string;
  displayName: string;
  picture: string;
  hostedSpaces: {
    pageInfo: {hasMore: boolean; endCursor?: string};
    spaces: {
      id: string;
      title: string;
      openDate: string;
      hostedUser: {uniqueName: string; displayName: string; picture: string};
      followingUsers: {
        hasMore: boolean;
        users: {uniqueName: string; displayName: string; picture: string}[];
      };
    }[];
  };
  followingSpaces: {
    pageInfo: {hasMore: boolean; endCursor?: string};
    spaces: {
      id: string;
      title: string;
      openDate: string;
      hostedUser: {uniqueName: string; displayName: string; picture: string};
      followingUsers: {
        hasMore: boolean;
        users: {uniqueName: string; displayName: string; picture: string}[];
      };
    }[];
  };
};

export const transform = ({user}: UserPageQuery): TransformedProps => ({
  uniqueName: user.uniqueName,
  displayName: user.displayName,
  picture: user.picture,
  hostedSpaces: {
    pageInfo: {
      hasMore: user.hostedSpaces.pageInfo.hasNextPage,
      ...(user.hostedSpaces.pageInfo.endCursor
        ? {endCursor: user.hostedSpaces.pageInfo.endCursor}
        : {}),
    },
    spaces: user.hostedSpaces.edges.map(({node: {space}}) => ({
      id: space.id,
      title: space.title,
      openDate: space.openDate,
      hostedUser: {
        uniqueName: user.uniqueName,
        displayName: user.displayName,
        picture: user.picture,
      },
      followingUsers: {
        hasMore: space.followingUsers.pageInfo.hasNextPage,
        users: space.followingUsers.edges.map(({node: {user}}) => ({
          uniqueName: user.uniqueName,
          displayName: user.displayName,
          picture: user.picture,
        })),
      },
    })),
  },
  followingSpaces: {
    pageInfo: {
      hasMore: user.followingSpaces.pageInfo.hasNextPage,
      ...(user.followingSpaces.pageInfo.endCursor
        ? {endCursor: user.followingSpaces.pageInfo.endCursor}
        : {}),
    },
    spaces: user.followingSpaces.edges.map(({node: {space}}) => ({
      id: space.id,
      title: space.title,
      openDate: space.openDate,
      hostedUser: {
        uniqueName: space.hostUser.user.uniqueName,
        displayName: space.hostUser.user.displayName,
        picture: space.hostUser.user.picture,
      },
      followingUsers: {
        hasMore: space.followingUsers.pageInfo.hasNextPage,
        users: space.followingUsers.edges.map(({node: {user}}) => ({
          uniqueName: user.uniqueName,
          displayName: user.displayName,
          picture: user.picture,
        })),
      },
    })),
  },
});
