import { useContext } from 'react';
import { StyledButton, NewsTimestamp, Container } from './styles';
import NewsContext from '../../context/NewsContext';
import getPublicationDifferenceTime from '../../helpers/showPublicationTimeDifference';

type ButtonProps = {
  label: string,
};

function ButtonReadTheNews({ label }: ButtonProps) {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;
  return (
    <Container>
      <NewsTimestamp>
        <p>{getPublicationDifferenceTime(latestOne.data_publicacao)}</p>
      </NewsTimestamp>
      <StyledButton>
        <p>{label}</p>
      </StyledButton>
    </Container>
  );
}

export default ButtonReadTheNews;
