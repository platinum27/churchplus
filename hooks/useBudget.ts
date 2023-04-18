import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useBudget = (id?: string) => {
  const { data, error, isLoading } = useSwr(id ? `/api/budget/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useBudget;
