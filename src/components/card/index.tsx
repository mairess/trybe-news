import { useContext } from 'react';
import { Container, NewsHeadline, NewsLead } from './style';
import NewsContext from '../../context/NewsContext';
import ButtonReadTheNews from '../buttonReadTheNews';
import ButtonFavorite from '../buttonFavorite';

type CardProps = {
  title: string,
  description: string,
  buttonLabel: string,
};

function Card({ title, description, buttonLabel }: CardProps) {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <Container>
      <div>
        <ButtonFavorite isLatestNews />
        {latestOne && (
          <>
            <NewsHeadline>
              <h1>{title}</h1>
            </NewsHeadline>
            <NewsLead>
              <p>{description}</p>
            </NewsLead>
            <ButtonReadTheNews
              label={ buttonLabel }
            />
          </>
        )}
      </div>
    </Container>
  );
}

export default Card;
