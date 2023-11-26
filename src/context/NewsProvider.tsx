import { useEffect, useState } from 'react';
import useFetchTheNews from '../hooks/useFetchTheNews';
import NewsContext from './NewsContext';
import { NewsType, TheNewsType } from '../types';
import getParsedFavorites from '../helpers/getParsedFavorites';

type FilterProviderProps = {
  children: React.ReactNode,
};

function NewsProvider({ children }: FilterProviderProps) {
  const { theNews, setTheNews, loading } = useFetchTheNews();
  const [filter, setFilter] = useState('latests');
  const [favToRender, setFavToRender] = useState<TheNewsType>([]);
  const [filteredContent, setFilteredContent] = useState<TheNewsType>([]);
  const [loadMoreNews, setLoadMoreNews] = useState(10);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
  };

  function handleLoadMoreNews() {
    setLoadMoreNews((prev) => prev + 10);
  }

  useEffect(() => {
    let filtered = theNews.filter((news) => {
      if (filter === 'latests') {
        return true;
      }

      if (filter === 'Release') {
        return news.tipo === filter;
      }

      if (filter === 'Notícia') {
        return news.tipo === filter;
      }
      setLoadMoreNews(10);
      return true;
    });

    if (filter === 'favorites') {
      const parsedFavorites = getParsedFavorites();
      setFavToRender(parsedFavorites);

      if (searchInput !== '') {
        const newFavs = parsedFavorites
          .filter((news: NewsType) => news.titulo.includes(searchInput));
        setFavToRender(newFavs);
        filtered = newFavs;
      } else {
        filtered = parsedFavorites;
      }
    }

    if (searchInput !== '') {
      filtered = filtered.filter((news) => {
        const lowercaseTitulo = news.titulo.toLocaleLowerCase();
        const lowercaseSearchInput = searchInput.toLowerCase();
        return lowercaseTitulo.includes(lowercaseSearchInput);
      });
    }

    setFilteredContent(filtered);
  }, [filter, theNews, searchInput]);
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
        handleChange,
        searchInput,
        setSearchInput,
      } }
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
