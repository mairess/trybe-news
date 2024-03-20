import { Container } from './style';
import { getDifference } from '../../helpers/getDate';

type ButtonProps = {
  publicationDate: string,
};

function Timestamp({ publicationDate }: ButtonProps) {
  return (
    <Container>
      <p data-testid="timestamp">{getDifference(publicationDate)}</p>
    </Container>
  );
}

export default Timestamp;
