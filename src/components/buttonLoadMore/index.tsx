import { useContext } from 'react';
import { ButtonWrapper, Button } from './style';
import NewsContext from '../../context/NewsContext';
import { NewsType } from '../../types';

function ButtonLoadMore() {
  const { handleLoadMoreNews, filter, filteredContent,
    loadMoreNews } = useContext(NewsContext);

  let hideTheButton = loadMoreNews >= filteredContent.length;

  if (filter === 'releases') {
    const arraySize = filteredContent
      .filter((content: NewsType) => content.tipo === 'Release');
    hideTheButton = loadMoreNews >= arraySize.length;
    console.log(arraySize.length);
  }

  if (filter === 'news') {
    const arraySize = filteredContent
      .filter((content: NewsType) => content.tipo === 'Notícia');
    hideTheButton = loadMoreNews >= arraySize.length;
  }

  return (
    <ButtonWrapper>
      {!hideTheButton && (
        <Button
          onClick={ () => handleLoadMoreNews() }
        >
          Mais Notícias
        </Button>
      )}
    </ButtonWrapper>
  );
}

export default ButtonLoadMore;
