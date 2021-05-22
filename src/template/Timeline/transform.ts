import {PersonalPageQuery} from '~/graphql/apollo';
import {TransformedProps as UserTransformedProps} from '../User';

export type TransformedProps = UserTransformedProps;
export const transform = (
  currentUser: NonNullable<PersonalPageQuery['currentUser']>,
): TransformedProps => ({
  uniqueName: currentUser.uniqueName,
  displayName: currentUser.displayName,
  picture: currentUser.picture,
  hostedSpaces: {
    pageInfo: {
      hasMore: currentUser.hostedSpaces.pageInfo.hasNextPage,
      ...(currentUser.hostedSpaces.pageInfo.endCursor
        ? {endCursor: currentUser.hostedSpaces.pageInfo.endCursor}
        : {}),
    },
    spaces: currentUser.hostedSpaces.edges.map(({node: {space}}) => ({
      id: space.id,
      title: space.title,
      openDate: space.openDate,
      hostedUser: {
        uniqueName: currentUser.uniqueName,
        displayName: currentUser.displayName,
        picture: currentUser.picture,
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
      hasMore: currentUser.followingSpaces.pageInfo.hasNextPage,
      ...(currentUser.followingSpaces.pageInfo.endCursor
        ? {endCursor: currentUser.followingSpaces.pageInfo.endCursor}
        : {}),
    },
    spaces: currentUser.followingSpaces.edges.map(({node: {space}}) => ({
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
