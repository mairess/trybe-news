import { StyledButton } from './style';
import favorite from '../../assets/empty_favorite_icon.svg';

type ButtonFavoriteProps = {
  onClick: () => void,
};

function ButtonFavorite({ onClick }: ButtonFavoriteProps) {
  return (
    <StyledButton onClick={ onClick }>
      <img src={ favorite } alt="favorite button" />
    </StyledButton>
  );
}

export default ButtonFavorite;
