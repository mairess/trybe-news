import { StyledButton, NewsTimestamp, Container } from './styles';
import getPublicationDifferenceTime from '../../helpers/showPublicationTimeDifference';

type ButtonProps = {
  label: string,
  publicationDate: string,
};

function ButtonReadTheNews({ label, publicationDate }: ButtonProps) {
  return (
    <Container>
      <NewsTimestamp>
        <p>{getPublicationDifferenceTime(publicationDate)}</p>
      </NewsTimestamp>
      <StyledButton>
        <p>{label}</p>
      </StyledButton>
    </Container>
  );
}

export default ButtonReadTheNews;
