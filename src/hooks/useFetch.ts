import { useState } from 'react';

type Request = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: any | null;
  params?: string | null;
};

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean | null>(null);

  const request = async ({
    url,
    method = 'GET',
    data = null,
    params = null,
  }: Request) => {
    setLoading(true);

    const config = {
      method,
      url,
      data,
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return await fetch(config.url, config)
      .then(repos => repos.json())
      .finally(() => setLoading(false));
  };

  return { request, loading };
};
