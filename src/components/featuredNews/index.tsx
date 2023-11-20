import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';
import { Container, ImgWrapper, CardWrapper, LatestFavoriteWrapper,
  ReadTheNesTimestampWrapper } from './style';
import LatestNewsStamp from '../latestNewsStamp';
import ButtonFavorite from '../buttonFavorite';
import Timestamp from '../timestamp';
import ButtonReadTheNews from '../buttonReadTheNews';

function FeaturedNews() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

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
            <ButtonFavorite />
          </LatestFavoriteWrapper>
          <Card
            key={ latestOne.id }
            title={ latestOne.titulo }
            description={ latestOne.introducao }
          />
          <ReadTheNesTimestampWrapper>
            <Timestamp publicationDate={ latestOne.data_publicacao } />
            <ButtonReadTheNews />
          </ReadTheNesTimestampWrapper>
        </CardWrapper>
      </Container>
    )
  );
}

export default FeaturedNews;
