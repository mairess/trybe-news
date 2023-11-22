import { useState } from 'react';
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

  let filteredContent = theNews.filter((news) => {
    if (filter === 'latests') {
      return theNews;
    }

    if (filter === 'releases') {
      return news.tipo === 'Release';
    }

    if (filter === 'news') {
      return news.tipo === 'Notícia';
    }
    return true;
  });

  if (filter === 'favorites') {
    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    filteredContent = parsedFavorites;
  }

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
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
