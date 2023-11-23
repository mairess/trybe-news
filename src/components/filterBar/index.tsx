import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, Wrapper, Button } from './style';

function FilterBar() {
  const { filter, setFilter } = useContext(NewsContext);

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      {/* <div>Change view</div> */}
    </Container>
  );
}

export default FilterBar;
