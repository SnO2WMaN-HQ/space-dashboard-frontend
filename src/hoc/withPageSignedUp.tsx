import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useCurrentUser} from '~/hooks/useCurrentUser';

export function withPageSignedUp<T>(Component: React.VFC<T>) {
  const WithPageSignedUp = (props: T) => {
    const router = useRouter();
    const current = useCurrentUser();

    useEffect(() => {
      if ('registered' in current && !current.registered)
        router.push('/register');
    }, [current, router]);

    return <Component {...props} />;
  };
  return WithPageSignedUp;
}
