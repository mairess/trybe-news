import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, ContainerButtons, Button } from './style';

function FilterBar() {
  const { theNews } = useContext(NewsContext);
  const [selectedButton, setSelectedButton] = useState('');

  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <Container>
      <ContainerButtons>
        <Button
          className={ selectedButton === 'latests' ? 'selected' : '' }
          onClick={ () => handleClick('latests') }
        >
          Mais recentes
        </Button>
        <Button
          className={ selectedButton === 'releases' ? 'selected' : '' }
          onClick={ () => handleClick('releases') }
        >
          Release
        </Button>
        <Button
          className={ selectedButton === 'news' ? 'selected' : '' }
          onClick={ () => handleClick('news') }
        >
          Notícias
        </Button>
        <Button
          className={ selectedButton === 'favorites' ? 'selected' : '' }
          onClick={ () => handleClick('favorites') }
        >
          Favoritas
        </Button>
      </ContainerButtons>
      {/* <div>Change view</div> */}
    </Container>
  );
}

export default FilterBar;
