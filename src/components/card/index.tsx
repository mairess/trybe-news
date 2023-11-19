import { useContext } from 'react';
import { Container, NewsHeadline, NewsLead } from './style';
import NewsContext from '../../context/NewsContext';
import ButtonReadTheNews from '../buttonReadTheNews';
import ButtonFavorite from '../buttonFavorite';

type CardProps = {
  title: string,
  description: string,
  buttonLabel: string,
  isFeatured?: boolean,
  isLatestNews?: boolean,
  publicationDate: string,
};

function Card({
  title,
  description,
  buttonLabel,
  isFeatured = true,
  isLatestNews = false,
  publicationDate,
}: CardProps) {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <Container isFeatured={ isFeatured }>
      <div>
        {isLatestNews && (<ButtonFavorite isLatestNews={ isLatestNews } />)}
        {latestOne && (
          <>
            <NewsHeadline>
              <h1>{title}</h1>
            </NewsHeadline>
            <NewsLead>
              <p>{description}</p>
            </NewsLead>
            <ButtonReadTheNews
              publicationDate={ publicationDate }
              label={ buttonLabel }
            />
          </>
        )}
        {!isLatestNews && (<ButtonFavorite isLatestNews={ isLatestNews } />)}
      </div>
    </Container>
  );
}

export default Card;
