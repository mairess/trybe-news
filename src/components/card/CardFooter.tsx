import ButtonReadTheNews from '../buttonReadTheNews';
import Timestamp from '../timestamp';
import { Wrapper } from './style';

type CardFooterProps = {
  publicatiopnDate: string,
  linkToRead: string,
};

function CardFooter({ publicatiopnDate, linkToRead }:CardFooterProps) {
  return (
    <Wrapper>
      <Timestamp publicationDate={ publicatiopnDate } />
      <ButtonReadTheNews
        linkToRead={ linkToRead }
      />
    </Wrapper>
  );
}

export default CardFooter;
