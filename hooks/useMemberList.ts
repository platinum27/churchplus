import useSwr from 'swr'
import fetcher from '../libs/fetcher';

const useMembers = () => {
  const { data, error, isLoading } = useSwr('/api/operations/getmembers', fetcher, {
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

export default useMembers;
