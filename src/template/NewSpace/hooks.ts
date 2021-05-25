import {useRouter} from 'next/router';
import {useState} from 'react';
import {useNewSpacePageCreateSpaceMutation} from '~/graphql/apollo';

export const useCreateSpace = () => {
  const router = useRouter();
  const [mutation, {loading, error}] = useNewSpacePageCreateSpaceMutation();
  const [completed, setCompleted] = useState(false);

  const createSpace = (data: {
    hostUserId: string;
    title: string;
    description: string | null;
    minutesUrl: string;
    openDate: string;
  }) =>
    mutation({
      variables: {...data},
    }).then(({data, errors}) => {
      if (data) {
        router.push(`/spaces/${data.createSpace.id}`);
        setCompleted(true);
      }
    });

  return [createSpace, {loading, completed, error}] as const;
};
