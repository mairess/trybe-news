import { Line, ButtonWrapper, CardWrapper } from './style';
import Card from '../card';
import CardFooter from '../card/CardFooter';
import ButtonFavorite from '../buttonFavorite';
import useFavorites from '../../hooks/useFavorite';
import { NewsType } from '../../types';

type NewsItemProps = {
  news: NewsType,
};

function NewsItem({ news }: NewsItemProps) {
  const { id, titulo, introducao, data_publicacao: publicacao } = news;
  const { isFavorite, toggleFavorite } = useFavorites(id);

  return (
    <CardWrapper key={ id }>
      <Card
        title={ titulo }
        description={ introducao }
      />
      <CardFooter publicatiopnDate={ publicacao } />
      <Line />
      <ButtonWrapper>
        <ButtonFavorite
          isFav={ isFavorite }
          onClick={ () => toggleFavorite() }
        />
      </ButtonWrapper>
    </CardWrapper>
  );
}

export default NewsItem;
