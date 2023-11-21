import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container } from './style';
import NewsItem from './NewsItem';

function NewsList() {
  const { theNews } = useContext(NewsContext);

  return (
    <Container>
      {theNews && theNews
        .slice(1).map((news) => <NewsItem key={ news.id } news={ news } />)}
    </Container>
  );
}

export default NewsList;
