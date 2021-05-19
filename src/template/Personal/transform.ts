import {PersonalUserPageQuery} from '~/graphql/apollo';
import {TransformedProps as UserTransformedProps} from '../User';

export type TransformedProps = UserTransformedProps;
export const transform = ({
  currentUser: user,
}: PersonalUserPageQuery): TransformedProps => ({
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
