import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';
import { Container, ImgWrapper, CardWrapper, LatestFavoriteWrapper } from './style';
import LatestNewsStamp from '../latestNewsStamp';
import ButtonFavorite from '../buttonFavorite';
import CardFooter from '../card/CardFooter';
import { NewsType } from '../../types';

function FeaturedNews() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;
  // const [isfav, setIsFav] = useState(false);

  const newFavorite = {
    id: latestOne?.id,
    title: latestOne?.titulo,
    description: latestOne?.introducao,
    link: latestOne?.link,
  };

  const storedFavorites = localStorage.getItem('favorites');
  const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  // const isFavorite = parsedFavorites.some((fav: NewsType) => fav.id === latestOne?.id);
  const [isFavorite, setIsFavorite] = useState(parsedFavorites
    .some((fav: NewsType) => fav.id === latestOne?.id));

  function toggleFavorite() {
    if (isFavorite) {
      const updatedFavorites = parsedFavorites
        .filter((fav: NewsType) => fav.id !== latestOne.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      localStorage
        .setItem('favorites', JSON.stringify([...parsedFavorites, newFavorite]));
      setIsFavorite(true);
    }
  }

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
            <ButtonFavorite onClick={ () => toggleFavorite() } />
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
