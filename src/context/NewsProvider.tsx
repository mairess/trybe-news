import useFetchTheNews from '../hooks/useFetchTheNews';
import NewsContext from './NewsContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading } = useFetchTheNews();

  return (
    <NewsContext.Provider
      value={ {
        theNews,
        setTheNews,
        loading,
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
