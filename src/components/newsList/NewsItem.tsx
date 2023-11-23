import { Line, ButtonWrapper, Wrapper } from './style';
import Card from '../card';
import CardFooter from '../card/CardFooter';
import ButtonFavorite from '../buttonFavorite';
import useFavorites from '../../hooks/useFavorite';
import { NewsType } from '../../types';

type NewsItemProps = {
  news: NewsType,
};

function NewsItem({ news }: NewsItemProps) {
  const { id, titulo, introducao, data_publicacao: publicacao, link } = news;
  const { isFavorite, toggleFavorite } = useFavorites(id);

  return (
    <Wrapper key={ id }>
      <Card
        title={ titulo }
        description={ introducao }
      />
      <CardFooter
        linkToRead={ link }
        publicatiopnDate={ publicacao }
      />
      <Line />
      <ButtonWrapper>
        <ButtonFavorite
          isFav={ isFavorite }
          onClick={ () => toggleFavorite() }
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default NewsItem;
