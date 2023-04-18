import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useMember = (id?: string) => {
  const { data, error, isLoading } = useSwr(id ? `/api/operations/${id}` : null, fetcher, {
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

export default useMember;
