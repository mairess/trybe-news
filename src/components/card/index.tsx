import { Container, NewsHeadline, NewsLead } from './style';

type CardProps = {
  title: string,
  description: string,
};

function Card({ title, description }: CardProps) {
  return (
    <Container>
      <NewsHeadline>
        <h1>{title}</h1>
      </NewsHeadline>
      <NewsLead>
        <p>{description}</p>
      </NewsLead>
    </Container>
  );
}

export default Card;
