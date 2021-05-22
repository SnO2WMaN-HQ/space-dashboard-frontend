import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {Merge} from 'type-fest';
import {useNewSpacePageCreateSpaceMutation} from '~/graphql/apollo';
import {Component, ComponentProps} from './Component';
import {TransformedProps} from './transform';

export type ContainerProps = Merge<{className?: string}, TransformedProps>;
export const Container: React.VFC<ContainerProps> = ({
  id: hostUserId,
  ...props
}) => {
  const router = useRouter();
  const [createSpace, {loading}] = useNewSpacePageCreateSpaceMutation();
  const [completed, setCompleted] = useState(false);

  const onSubmit: ComponentProps['onSubmit'] = async ({
    title,
    description,
    minutesUrl,
    openDate,
  }) => {
    await createSpace({
      variables: {
        hostUserId,
        title,
        openDate,
        description: description ? description : null,
        minutesUrl: minutesUrl ? minutesUrl : null,
      },
    }).then(({data, errors}) => {
      if (data) {
        router.push(`/spaces/${data.createSpace.id}`);
        setCompleted(true);
      }
    });
  };

  return (
    <Component
      {...props}
      onSubmit={onSubmit}
      {...{isSubmitting: loading, isCompleted: completed}}
    />
  );
};
