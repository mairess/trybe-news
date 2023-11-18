import { useContext } from 'react';
import { NewsContainer, NewsHeadline, NewsLead, NewsTimestamp } from './style';
import NewsContext from '../../context/NewsContext';
import Button from '../button/Button';
import FavoriteButton from '../favoriteButton';

function Card() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <NewsContainer>
      <FavoriteButton />
      {latestOne && (
        <>
          <NewsHeadline>
            <h1>{latestOne.titulo}</h1>
          </NewsHeadline>
          <NewsLead>
            <p>{latestOne.introducao}</p>
          </NewsLead>
          <NewsTimestamp>
            <p>{latestOne.data_publicacao}</p>
          </NewsTimestamp>
          <Button
            label="Leia a notícia aqui"
          />
        </>
      )}
    </NewsContainer>
  );
}

export default Card;
