import { useEffect, useState } from 'react';
import { TheNewsType } from '../types';

const useFavoritesLocalStore = () => {
  const [favoriteNews, setFavoriteNews] = useState<TheNewsType>([]);
  const [storageChanged, setStorageChanged] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('favorites');
    const favorites: TheNewsType = storedData ? JSON.parse(storedData) : [];
    setFavoriteNews(favorites);
  }, [storageChanged]);

  const updateFavoriteNews = (newFavorites: TheNewsType) => {
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavoriteNews(newFavorites);
    setStorageChanged(!storageChanged);
  };

  return {
    favoriteNews,
    updateFavoriteNews,
  };
};

export default useFavoritesLocalStore;
