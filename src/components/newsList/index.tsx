import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, Line, ButtonWrapper } from './style';
import Card from '../card';
import CardFooter from '../card/CardFooter';
import ButtonFavorite from '../buttonFavorite';

function NewsList() {
  const { theNews } = useContext(NewsContext);
  return (
    <Container>
      {theNews && (
        theNews.slice(1).map((news) => {
          return (
            <div key={ news.id }>
              <Card
                title={ news.titulo }
                description={ news.introducao }
              />
              <CardFooter publicatiopnDate={ news.data_publicacao } />
              <Line />
              <ButtonWrapper>
                <ButtonFavorite />
              </ButtonWrapper>
            </div>
          );
        })
      )}

    </Container>
  );
}

export default NewsList;
