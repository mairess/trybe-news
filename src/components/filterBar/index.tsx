import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, ContainerButtons, Button } from './style';

function FilterBar() {
  const { filter, setFilter } = useContext(NewsContext);

  return (
    <Container>
      <ContainerButtons>
        <Button
          className={ filter === 'latests' ? 'selected' : '' }
          onClick={ () => setFilter('latests') }
        >
          Mais recentes
        </Button>
        <Button
          className={ filter === 'releases' ? 'selected' : '' }
          onClick={ () => setFilter('releases') }
        >
          Release
        </Button>
        <Button
          className={ filter === 'news' ? 'selected' : '' }
          onClick={ () => setFilter('news') }
        >
          Notícias
        </Button>
        <Button
          className={ filter === 'favorites' ? 'selected' : '' }
          onClick={ () => setFilter('favorites') }
        >
          Favoritas
        </Button>
      </ContainerButtons>
      {/* <div>Change view</div> */}
    </Container>
  );
}

export default FilterBar;
