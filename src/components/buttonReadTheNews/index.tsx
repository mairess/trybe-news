import { StyledButton } from './style';

type ButtonReadTheNewsProps = {
  linkToRead: string
};

function ButtonReadTheNews({ linkToRead }: ButtonReadTheNewsProps) {
  function HandleNavigateTo() {
    window.open(linkToRead, '_blank');
  }
  return (
    <StyledButton onClick={ () => HandleNavigateTo() }>
      <p>Leia a notícia aqui</p>
    </StyledButton>
  );
}

export default ButtonReadTheNews;
