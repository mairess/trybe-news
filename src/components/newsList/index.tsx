import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { NewsItemWrapper } from './style';
import NewsItem from './NewsItem';
import FilterBar from '../filterBar';
import ButtonLoadMore from '../buttonLoadMore';

function NewsList() {
  const { filteredContent, favToRender, filter, loadMoreNews } = useContext(NewsContext);

  return (
    <>
      <FilterBar />
      <NewsItemWrapper>
        {favToRender.length <= 0 && filter === 'favorites'
        && (<p>Sem notícias favoritas</p>) }
        {filter === 'favorites' ? (
          favToRender && favToRender
            .map((news) => <NewsItem key={ news.id } news={ news } />)
        ) : (
          filteredContent && filteredContent
            .slice(1, loadMoreNews)
            .map((news) => <NewsItem key={ news.id } news={ news } />)
        )}
      </NewsItemWrapper>
      <ButtonLoadMore />
    </>
  );
}

export default NewsList;
