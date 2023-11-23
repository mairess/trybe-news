import { useEffect, useState } from 'react';
import useFetchTheNews from '../hooks/useFetchTheNews';
import NewsContext from './NewsContext';
import { TheNewsType } from '../types';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading } = useFetchTheNews();
  const [filter, setFilter] = useState('latests');
  const [favToRender, setFavToRender] = useState<TheNewsType>([]);
  const [filteredContent, setFilteredContent] = useState<TheNewsType>([]);
  const [loadMoreNews, setLoadMoreNews] = useState(10);

  function handleLoadMoreNews() {
    setLoadMoreNews((prev) => prev + 10);
  }

  useEffect(() => {
    let filtered = theNews.filter((news) => {
      if (filter === 'latests') {
        setLoadMoreNews(10);
        return theNews;
      }

      if (filter === 'releases') {
        setLoadMoreNews(10);
        return news.tipo === 'Release';
      }

      if (filter === 'news') {
        setLoadMoreNews(10);
        return news.tipo === 'Notícia';
      }
      return true;
    });

    if (filter === 'favorites') {
      const storedFavorites = localStorage.getItem('favorites');
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      filtered = parsedFavorites;
      setFavToRender(parsedFavorites);
    }

    setFilteredContent(filtered);
  }, [filter, theNews]);
  return (
    <NewsContext.Provider
      value={ {
        theNews,
        setTheNews,
        loading,
        filter,
        setFilter,
        filteredContent,
        favToRender,
        setFavToRender,
        handleLoadMoreNews,
        loadMoreNews,
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
