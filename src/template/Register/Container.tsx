import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {Merge} from 'type-fest';
import {useRegisterMutation} from '~/graphql/apollo';
import {stateCurrentUser} from '~/hooks/useCurrentUser';
import {Component} from './Component';
import {FormProps} from './organisms/Form';
import {TransformProps} from './transform';

export const useSignUp = () => {
  const [mutation, {loading, error}] = useRegisterMutation();
  const setCurrentUser = useSetRecoilState(stateCurrentUser);
  const [completed, setCompleted] = useState(false);

  const signUp = (
    data: Record<'uniqueName' | 'displayName' | 'picture', string>,
  ) =>
    mutation({variables: data}).then(({data, errors}) => {
      if (errors) throw errors;
      else if (data) {
        setCompleted(true);
        setCurrentUser({id: data.createUser.id});
      }
    });

  return [signUp, {loading, completed, error}] as const;
};

export type ContainerProps = Merge<{className?: string}, TransformProps>;
export const Container: React.VFC<ContainerProps> = ({
  initialValues: initial,
  ...props
}) => {
  const [signUp, {loading, completed}] = useSignUp();
  const router = useRouter();

  const onSubmit: FormProps['onSubmit'] = async (data) =>
    signUp(data).then(() => {
      router.push('/timeline');
    });

  return (
    <Component
      {...props}
      onSubmit={onSubmit}
      {...{
        isSubmitting: loading,
        isCompleted: completed,
        initialValues: initial,
      }}
    />
  );
};
