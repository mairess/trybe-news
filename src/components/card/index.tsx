import { useContext } from 'react';
import { NewsContainer, NewsHeadline, NewsLead } from './style';
import NewsContext from '../../context/NewsContext';
import Button from '../button';
import FavoriteButton from '../favoriteButton';

function Card() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <NewsContainer>
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
    </NewsContainer>
  );
}

export default Card;
