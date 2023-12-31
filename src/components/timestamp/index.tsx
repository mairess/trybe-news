import { Container } from './style';
import getPublicationDifferenceTime from '../../helpers/showPublicationTimeDifference';

type ButtonProps = {
  publicationDate: string,
};

function Timestamp({ publicationDate }: ButtonProps) {
  return (
    <Container>
      <p data-testid="timestamp">{getPublicationDifferenceTime(publicationDate)}</p>
    </Container>
  );
}

export default Timestamp;
