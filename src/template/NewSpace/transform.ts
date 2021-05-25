import {NewSpacePageQuery} from '~/graphql/apollo';

export type TransformedProps = {
  id: string;
  displayName: string;
  uniqueName: string;
  picture: string;
};
export const transform = (
  currentUser: NonNullable<NewSpacePageQuery['currentUser']>,
): TransformedProps => ({
  id: currentUser.id,
  uniqueName: currentUser.uniqueName,
  displayName: currentUser.displayName,
  picture: currentUser.picture,
});
