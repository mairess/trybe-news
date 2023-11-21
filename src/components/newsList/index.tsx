import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container } from './style';
import NewsItem from './NewsItem';
import FilterBar from '../filterBar';

function NewsList() {
  const { theNews } = useContext(NewsContext);

  const newsRelease = theNews.filter((release) => release.tipo === 'Release');
  const newsNoticia = theNews.filter((release) => release.tipo === 'Notícia');

  return (
    <>
      <FilterBar />
      <Container>
        {theNews && theNews
          .slice(1).map((news) => <NewsItem key={ news.id } news={ news } />)}
      </Container>
    </>
  );
}

export default NewsList;
