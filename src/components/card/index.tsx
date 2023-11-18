import { useContext } from 'react';
import { NewsContainer, NewsHeadline, NewsLead, NewsTimestamp } from './style';
import NewsContext from '../../context/NewsContext';

function Card() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <NewsContainer>
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
        </>
      )}
    </NewsContainer>
  );
}

export default Card;
