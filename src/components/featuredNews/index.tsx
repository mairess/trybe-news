import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';
import { Container, ImgWrapper, CardWrapper, LatestFavoriteWrapper } from './style';
import LatestNewsStamp from '../latestNewsStamp';
import ButtonFavorite from '../buttonFavorite';
import CardFooter from '../card/CardFooter';
import useFavorites from '../../hooks/useFavorite';
import { NewsType } from '../../types';

function FeaturedNews() {
  const { theNews, favToRender } = useContext(NewsContext);
  const [latestOne] = theNews;
  const { /* isFavorite, */ toggleFavorite } = useFavorites(latestOne?.id);

  const isFavToRender = favToRender.some((fav: NewsType) => fav.id === latestOne.id);

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
              isFav={ isFavToRender }
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
