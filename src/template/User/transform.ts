import {UserPageQuery} from '~/graphql/graphql-request';

export type TransformedProps = {
  uniqueName: string;
  displayName: string;
  picture: string;
  hostedSpaces: {
    count: number;
    nodes: {
      id: string;
      title: string;
      openDate: string;
      hostedUser: {uniqueName: string; displayName: string; picture: string};
      followingUsers: {
        count: number;
        hasMore: boolean;
        nodes: {uniqueName: string; displayName: string; picture: string}[];
      };
    }[];
  };
  followingSpaces: {
    count: number;
    nodes: {
      id: string;
      title: string;
      openDate: string;
      hostedUser: {uniqueName: string; displayName: string; picture: string};
      followingUsers: {
        count: number;
        hasMore: boolean;
        nodes: {uniqueName: string; displayName: string; picture: string}[];
      };
    }[];
  };
};

export const transform = ({user}: UserPageQuery): TransformedProps => ({
  uniqueName: user.uniqueName,
  displayName: user.displayName,
  picture: user.picture,
  hostedSpaces: {
    count: user.hostedSpaces.length,
    nodes: user.hostedSpaces.map(({space}) => ({
      id: space.id,
      title: space.title,
      openDate: space.openDate,
      hostedUser: {
        uniqueName: user.uniqueName,
        displayName: user.displayName,
        picture: user.picture,
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
    })),
  },
  followingSpaces: {
    count: user.followingSpaces.length,
    nodes: user.followingSpaces.map(({space}) => ({
      id: space.id,
      title: space.title,
      openDate: space.openDate,
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
    })),
  },
});
