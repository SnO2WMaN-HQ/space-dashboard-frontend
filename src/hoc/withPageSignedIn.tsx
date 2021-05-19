import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useCurrentUser} from '~/hooks/useCurrentUser';

export function withPageSignedIn<T>(Component: React.VFC<T>) {
  const WithPageSignedIn = (props: T) => {
    const router = useRouter();
    const {loading, currentUser} = useCurrentUser();

    useEffect(() => {
      if (!loading && !currentUser) router.push('/signup');
    }, [currentUser, loading, router]);

    if (!loading) return <Component {...props} />;
    return <></>;
  };
  return WithPageSignedIn;
}
