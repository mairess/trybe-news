import { useContext } from 'react';
import { Container, NewsHeadline, NewsLead } from './style';
import NewsContext from '../../context/NewsContext';
import ButtonReadTheNews from '../buttonReadTheNews';
import ButtonFavorite from '../buttonFavorite';

function Card() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <Container>
      <div>
        <ButtonFavorite isLatestNews />
        {latestOne && (
          <>
            <NewsHeadline>
              <h1>{latestOne.titulo}</h1>
            </NewsHeadline>
            <NewsLead>
              <p>{latestOne.introducao}</p>
            </NewsLead>
            <ButtonReadTheNews
              label="Leia a notícia aqui"
            />
          </>
        )}
      </div>
    </Container>
  );
}

export default Card;
