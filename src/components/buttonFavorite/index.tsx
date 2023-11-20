import { StyledButton } from './styles';
import favorite from '../../assets/empty_favorite_icon.svg';

function ButtonFavorite() {
  return (
    <StyledButton>
      <img src={ favorite } alt="favorite button" />
    </StyledButton>
  );
}

export default ButtonFavorite;
