import { useContext, useEffect, useState } from 'react';
import NewsContext from '../context/NewsContext';
import { NewsType } from '../types';

function useFavorites(newsId: number) {
  const { theNews, setFavToRender } = useContext(NewsContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    setIsFavorite(parsedFavorites.some((fav: NewsType) => fav.id === newsId));
  }, [newsId]);

  const toggleFavorite = () => {
    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      const updatedFavorites = parsedFavorites
        .filter((fav: NewsType) => fav.id !== newsId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavToRender(updatedFavorites);
      setIsFavorite(false);
    } else {
      const newFavorite = theNews.find((news) => news.id === newsId);
      localStorage
        .setItem('favorites', JSON.stringify([...parsedFavorites, newFavorite]));
      setFavToRender([...parsedFavorites, newFavorite]);
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
}

export default useFavorites;
