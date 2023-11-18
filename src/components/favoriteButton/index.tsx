import { Container, StyledButton, LatestNewsStamp } from './styles';
import favorite from '../../assets/empty_favorite_icon.svg';

export type ButtonProps = {
  isLatestNews?: boolean,
};

function FavoriteButton({ isLatestNews = false }: ButtonProps) {
  return (
    <Container style={ isLatestNews ? { justifyContent: 'space-between' } : {} }>
      {isLatestNews && (
        <LatestNewsStamp>
          <p>Notícia mais recente</p>
        </LatestNewsStamp>
      )}
      <StyledButton>
        <img src={ favorite } alt="favorite button" />
      </StyledButton>
    </Container>
  );
}

export default FavoriteButton;
