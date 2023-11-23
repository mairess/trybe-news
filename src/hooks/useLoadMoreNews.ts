import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import { NewsType } from '../types';

function useLoadMoreNews() {
  const { filter, filteredContent,
    loadMoreNews } = useContext(NewsContext);

  let hideTheButton = loadMoreNews >= filteredContent.length;

  if (filter === 'releases') {
    const arraySize = filteredContent
      .filter((content: NewsType) => content.tipo === 'Release');
    hideTheButton = loadMoreNews >= arraySize.length;
  }

  if (filter === 'news') {
    const arraySize = filteredContent
      .filter((content: NewsType) => content.tipo === 'Notícia');
    hideTheButton = loadMoreNews >= arraySize.length;
  }

  return { hideTheButton };
}

export default useLoadMoreNews;
