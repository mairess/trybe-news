import ButtonReadTheNews from '../buttonReadTheNews';
import Timestamp from '../timestamp';
import { ReadTheNesTimestampWrapper } from './style';

type CardFooterProps = {
  publicatiopnDate: string,
};

function CardFooter({ publicatiopnDate }:CardFooterProps) {
  return (
    <ReadTheNesTimestampWrapper>
      <Timestamp publicationDate={ publicatiopnDate } />
      <ButtonReadTheNews />
    </ReadTheNesTimestampWrapper>
  );
}

export default CardFooter;
