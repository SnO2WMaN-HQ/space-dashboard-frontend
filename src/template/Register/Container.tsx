import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {useRegisterMutation} from '~/graphql/apollo';
import {stateCurrentUser} from '~/hooks/useCurrentUser';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.VFC<ContainerProps> = (props) => {
  const [executeRegister, {loading, error}] = useRegisterMutation();
  const setCurrentUser = useSetRecoilState(stateCurrentUser);
  const [completed, setCompleted] = useState(false);

  const onSubmit: ComponentProps['onSubmit'] = async (data) =>
    executeRegister({
      variables: {
        ...data,
        picture:
          'https://pbs.twimg.com/profile_images/1385175341929402375/7YYzIEhB.jpg',
      },
    }).then(({data, errors}) => {
      if (data) {
        setCompleted(true);
        setCurrentUser(data.createUser);
      }
    });

  return (
    <Component
      {...props}
      onSubmit={onSubmit}
      {...{isSubmitting: loading, isCompleted: completed}}
    />
  );
};
