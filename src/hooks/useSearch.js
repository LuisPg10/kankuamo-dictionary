import { useSearchParams } from 'react-router';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  /**
   * change the 'q' search params in the url
   * @param {string} query
   */
  const handleSearch = (query) => {
    setSearchParams((searchParams) => {
      query ? searchParams.set('q', query) : searchParams.delete('q');
      return searchParams;
    });
  };

  return {
    //* Props
    query,

    //* Methods
    handleSearch,
  };
};
