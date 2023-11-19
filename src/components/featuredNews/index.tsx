import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';
import { Container, ImgWrapper } from './style';

function FeaturedNews() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <Container>
      <ImgWrapper>
        {theNews.length && (
          <img
            src={ latestOne.imagens.image_intro }
            alt={ `Illustration for ${latestOne.titulo}` }
          />
        )}
      </ImgWrapper>
      <Card />
    </Container>
  );
}

export default FeaturedNews;
