import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';
import { Container, ImgWrapper, CardWrapper, LatestFavoriteWrapper } from './style';
import LatestNewsStamp from '../latestNewsStamp';
import ButtonFavorite from '../buttonFavorite';
import CardFooter from '../card/CardFooter';
import useFavorites from '../../hooks/useFavorite';

function FeaturedNews() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;
  const { isFavorite, toggleFavorite } = useFavorites(latestOne?.id);

  return (
    latestOne && (
      <Container>
        <ImgWrapper>
          <img
            src={ latestOne.imagens.image_fulltext }
            alt={ `Illustration for ${latestOne.titulo}` }
          />
        </ImgWrapper>

        <CardWrapper>
          <LatestFavoriteWrapper>
            <LatestNewsStamp />
            <ButtonFavorite
              isFav={ isFavorite }
              onClick={ () => toggleFavorite() }
            />
          </LatestFavoriteWrapper>
          <Card
            key={ latestOne.id }
            title={ latestOne.titulo }
            description={ latestOne.introducao }
          />
          <CardFooter publicatiopnDate={ latestOne.data_publicacao } />
        </CardWrapper>
      </Container>
    )
  );
}

export default FeaturedNews;
