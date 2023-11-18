import useFetchTheNews from '../hooks/useFetchTheNews';
import newsContext from './NewsContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading, baseURL } = useFetchTheNews();

  return (
    <newsContext.Provider
      value={ {
        theNews,
        setTheNews,
        loading,
        baseURL,
      } }
    >
      {children}
    </newsContext.Provider>
  );
}

export default NewsProvider;
