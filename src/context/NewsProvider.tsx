import useFetchTheNews from '../hooks/useFetchTheNews';
import NewsContext from './NewsContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading } = useFetchTheNews();
  const newsRelease = theNews.filter((release) => release.tipo === 'Release');
  const newsNoticia = theNews.filter((release) => release.tipo === 'Notícia');

  return (
    <NewsContext.Provider
      value={ {
        theNews,
        setTheNews,
        loading,
        newsRelease,
        newsNoticia,
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
