import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container } from './style';
import NewsItem from './NewsItem';
import FilterBar from '../filterBar';

function NewsList() {
  const { filteredContent, favToRender, filter } = useContext(NewsContext);

  return (
    <>
      <FilterBar />
      <Container>
        {filter === 'favorites' ? (
          favToRender && favToRender
            .map((news) => <NewsItem key={ news.id } news={ news } />)
        ) : (
          filteredContent && filteredContent
            .slice(1).map((news) => <NewsItem key={ news.id } news={ news } />)
        )}
      </Container>
    </>
  );
}

export default NewsList;
