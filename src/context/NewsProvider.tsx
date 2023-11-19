import useFetchTheNews from '../hooks/useFetchTheNews';
import NewsContext from './NewsContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading, baseURL } = useFetchTheNews();

  return (
    <NewsContext.Provider
      value={ {
        theNews,
        setTheNews,
        loading,
        baseURL,
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
