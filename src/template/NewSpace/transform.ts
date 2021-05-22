import {NewSpacePageQuery} from '~/graphql/apollo';

export type TransformedProps = {
  id: string;
};
export const transform = (
  currentUser: NonNullable<NewSpacePageQuery['currentUser']>,
): TransformedProps => ({id: currentUser.id});
