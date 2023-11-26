function getParsedFavorites() {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

export default getParsedFavorites;
