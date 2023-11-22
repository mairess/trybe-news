import { useState } from 'react';
import useFetchTheNews from '../hooks/useFetchTheNews';
import NewsContext from './NewsContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading } = useFetchTheNews();
  const [filter, setFilter] = useState('');

  const filteredContent = theNews.filter((news) => {
    if (filter === 'latests') {
      return theNews;
    }

    if (filter === 'releases') {
      return news.tipo === 'Release';
    }

    if (filter === 'news') {
      return news.tipo === 'Notícia';
    }

    if (filter === 'favorites') {
      const storedFavorites = localStorage.getItem('favorites');
      const favoritesParserd = storedFavorites ? JSON.parse(storedFavorites) : [];
      console.log('clicou favoritos');

      return favoritesParserd;
    }

    return true;
  });

  return (
    <NewsContext.Provider
      value={ {
        theNews,
        setTheNews,
        loading,
        filter,
        setFilter,
        filteredContent,
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
