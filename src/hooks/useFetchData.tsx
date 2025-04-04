import { useState } from 'react';

import { useSession } from 'next-auth/react';

import { api } from '../services/config';

interface UseFetchData {
  url: string;
  method: 'get' | 'post';
}

function useFetchData<T>({ url, method }: UseFetchData) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { data: session } = useSession();
  const token = session?.account?.access_token ?? '';

  // signOut({ callbackUrl: '/api/auth/logout' });
  // signIn('keycloak');

  const fetchData = async () => {
    try {
      const { data: response } = await api[method]<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response);
    } catch (error) {
      setError(!!error);
    }

    setLoading(false);
  };

  return {
    fetchData,
    data,
    loading,
    error,
  };
}

export { useFetchData };
