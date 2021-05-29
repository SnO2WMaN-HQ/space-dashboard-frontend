import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useCurrentUser} from '~/hooks/useCurrentUser';

export function withPageRegisterRequired<T>(Component: React.VFC<T>) {
  const WithPageRegisterRequired = (props: T) => {
    const router = useRouter();
    const current = useCurrentUser();

    useEffect(() => {
      if ('status' in current && current.status === 'unregistered')
        router.push('/register');
    }, [current, router]);

    return <Component {...props} />;
  };
  return WithPageRegisterRequired;
}
