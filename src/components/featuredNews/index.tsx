import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';
import { Container, ImgWrapper, CardWrapper, LatestFavoriteWrapper } from './style';
import LatestNewsStamp from '../latestNewsStamp';
import ButtonFavorite from '../buttonFavorite';
import CardFooter from '../card/CardFooter';
import { NewsType } from '../../types';
import useFavorites from '../../hooks/useFavorite';

function FeaturedNews() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;
  const { isFavorite, toggleFavorite } = useFavorites(latestOne?.id);

  // const newFavorite = {
  //   id: latestOne?.id,
  //   title: latestOne?.titulo,
  //   description: latestOne?.introducao,
  //   link: latestOne?.link,
  // };

  // const storedFavorites = localStorage.getItem('favorites');
  // const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  // const [isFavorite, setIsFavorite] = useState(parsedFavorites
  //   .some((fav: NewsType) => fav.id === latestOne?.id));

  // function toggleFavorite() {
  //   if (isFavorite) {
  //     const updatedFavorites = parsedFavorites
  //       .filter((fav: NewsType) => fav.id !== latestOne.id);
  //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //     setIsFavorite(false);
  //   } else {
  //     localStorage
  //       .setItem('favorites', JSON.stringify([...parsedFavorites, newFavorite]));
  //     setIsFavorite(true);
  //   }
  // }

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
