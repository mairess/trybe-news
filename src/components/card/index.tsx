import { useContext } from 'react';
import { Container, NewsHeadline, NewsLead, ImgWrapper } from './style';
import NewsContext from '../../context/NewsContext';
import Button from '../button';
import FavoriteButton from '../favoriteButton';

function Card() {
  const { theNews, baseURL } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <Container>
      <ImgWrapper>
        {theNews.length && (
          <img
            src={ baseURL + latestOne.imagens.image_intro }
            alt={ `Illustration for ${latestOne.titulo}` }
          />
        )}
      </ImgWrapper>
      <div>
        <FavoriteButton isLatestNews />
        {latestOne && (
          <>
            <NewsHeadline>
              <h1>{latestOne.titulo}</h1>
            </NewsHeadline>
            <NewsLead>
              <p>{latestOne.introducao}</p>
            </NewsLead>
            <Button
              label="Leia a notícia aqui"
            />
          </>
        )}
      </div>
    </Container>
  );
}

export default Card;
