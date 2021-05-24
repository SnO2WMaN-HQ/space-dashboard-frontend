import {UserProfile} from '@auth0/nextjs-auth0';

export type TransformProps = {
  initialValues: Partial<Record<'displayName' | 'picture', string>>;
};
export const transform = (auth0Profile?: UserProfile): TransformProps => {
  return {
    initialValues: {
      displayName: auth0Profile?.nickname || undefined,
      picture: auth0Profile?.picture || undefined,
    },
  };
};
