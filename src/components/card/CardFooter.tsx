import ButtonReadTheNews from '../buttonReadTheNews';
import Timestamp from '../timestamp';
import { ReadTheNesTimestampWrapper } from './style';

type CardFooterProps = {
  publicatiopnDate: string,
  linkToRead: string,
};

function CardFooter({ publicatiopnDate, linkToRead }:CardFooterProps) {
  return (
    <ReadTheNesTimestampWrapper>
      <Timestamp publicationDate={ publicatiopnDate } />
      <ButtonReadTheNews
        linkToRead={ linkToRead }
      />
    </ReadTheNesTimestampWrapper>
  );
}

export default CardFooter;
