import { useState, useEffect } from 'react';

type UseDelayedDataProps<T> = {
  data: T | null;
	delay?: number; 
};

type UseDelayedDataResult<T> = {
  displayData: T | null;
  loading: boolean;
};

export const useDelayedData = <T>({ data, delay }: UseDelayedDataProps<T>): UseDelayedDataResult<T> => {
  const [displayData, setDisplayData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
			setLoading(true);
      const timeout = setTimeout(() => {
        setDisplayData(data);
        setLoading(false);
      }, delay ?? 500);

      return () => clearTimeout(timeout);
    }
  }, [data]);

  return { displayData, loading };
};
