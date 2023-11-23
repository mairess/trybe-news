import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, ButtonLoadMore } from './style';
import NewsItem from './NewsItem';
import FilterBar from '../filterBar';
import { NewsType } from '../../types';

function NewsList() {
  const { filteredContent, favToRender, filter,
    handleLoadMoreNews, loadMoreNews } = useContext(NewsContext);

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
    <>
      <FilterBar />
      <Container>
        {filter === 'favorites' ? (
          favToRender && favToRender
            .map((news) => <NewsItem key={ news.id } news={ news } />)
        ) : (
          filteredContent && filteredContent
            .slice(1, loadMoreNews)
            .map((news) => <NewsItem key={ news.id } news={ news } />)
        )}
        {!hideTheButton && (
          <ButtonLoadMore
            onClick={ () => handleLoadMoreNews() }
          >
            Mais Notícias
          </ButtonLoadMore>
        )}
      </Container>
    </>
  );
}

export default NewsList;
