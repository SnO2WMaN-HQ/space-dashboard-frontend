import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {useRegisterMutation} from '~/graphql/apollo';
import {stateCurrentUser} from '~/hooks/useCurrentUser';

export const useRegister = () => {
  const [mutation, {loading, error}] = useRegisterMutation();
  const setCurrentUser = useSetRecoilState(stateCurrentUser);
  const [completed, setCompleted] = useState(false);

  const register = (
    data: Record<'uniqueName' | 'displayName' | 'picture', string>,
  ) =>
    mutation({variables: data}).then(({data, errors}) => {
      if (errors) throw errors;
      else if (data) {
        setCompleted(true);
        setCurrentUser({loading: false, currentUser: {id: data.createUser.id}});
      }
    });

  return [register, {loading, completed, error}] as const;
};
