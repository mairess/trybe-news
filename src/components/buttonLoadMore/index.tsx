import { useContext } from 'react';
import { ButtonWrapper, Button } from './style';
import NewsContext from '../../context/NewsContext';
import useLoadMoreNews from '../../hooks/useLoadMoreNews';

function ButtonLoadMore() {
  const { handleLoadMoreNews } = useContext(NewsContext);
  const { hideTheButton } = useLoadMoreNews();

  return (
    <ButtonWrapper>
      {!hideTheButton && (
        <Button
          onClick={ () => handleLoadMoreNews() }
        >
          Mais Notícias
        </Button>
      )}
    </ButtonWrapper>
  );
}

export default ButtonLoadMore;
