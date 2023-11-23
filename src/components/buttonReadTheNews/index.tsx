import { Button } from './style';

type ButtonReadTheNewsProps = {
  linkToRead: string
};

function ButtonReadTheNews({ linkToRead }: ButtonReadTheNewsProps) {
  function HandleNavigateTo() {
    window.open(linkToRead, '_blank');
  }
  return (
    <Button onClick={ () => HandleNavigateTo() }>
      <p>Leia a notícia aqui</p>
    </Button>
  );
}

export default ButtonReadTheNews;
