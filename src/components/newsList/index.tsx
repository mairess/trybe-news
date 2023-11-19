import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container } from './style';
import Card from '../card';

function NewsList() {
  const { theNews } = useContext(NewsContext);
  return (
    <Container>
      {theNews && (
        theNews.slice(1).map((news) => {
          return (
            <Card
              key={ news.id }
              title={ news.titulo }
              description={ news.introducao }
              buttonLabel="Leia a notícia aqui"
            />
          );
        })
      )}

    </Container>
  );
}

export default NewsList;
