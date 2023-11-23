import { Button } from './style';
import emptyIcon from '../../assets/empty_favorite_icon.svg';
import filledIcon from '../../assets/filled_favorite_icon.svg';

type ButtonFavoriteProps = {
  onClick: () => void,
  isFav: boolean,
};

function ButtonFavorite({ onClick, isFav }: ButtonFavoriteProps) {
  return (
    <Button onClick={ onClick }>
      <img src={ isFav ? filledIcon : emptyIcon } alt="favorite button" />
    </Button>
  );
}

export default ButtonFavorite;
