import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, ButtonsWrapper, Button, SearchBarWrapper } from './style';
import SearchBar from '../searchBar';

function FilterBar() {
  const { filter, setFilter } = useContext(NewsContext);

  return (
    <>
      <Container>
        <ButtonsWrapper>
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
        </ButtonsWrapper>
        {/* <div>Change view</div> */}
      </Container>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
    </>
  );
}

export default FilterBar;
