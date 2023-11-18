import { Container, StyledButton } from './styles';
import favorite from '../../assets/FavoriteIcon.svg';

function FavoriteButton() {
  return (
    <Container>
      <p>Notícia mais recente</p>
      <StyledButton>
        <img src={ favorite } alt="favorite button" />
      </StyledButton>
    </Container>
  );
}

export default FavoriteButton;
