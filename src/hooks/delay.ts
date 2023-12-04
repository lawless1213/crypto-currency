import { useState, useEffect } from 'react';

type UseDelayedDataProps<T> = {
  data: T | null;
};

type UseDelayedDataResult<T> = {
  displayData: T | null;
  loading: boolean;
};

export const useDelayedData = <T>({ data }: UseDelayedDataProps<T>): UseDelayedDataResult<T> => {
  const [displayData, setDisplayData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
      const timeout = setTimeout(() => {
        setDisplayData(data);
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [data]);

  return { displayData, loading };
};
