import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, ButtonsWrapper, Button, SearchBarWrapper } from './style';
import SearchBar from '../searchBar';

function FilterBar() {
  const { filter, setFilter, setSearchInput } = useContext(NewsContext);

  return (
    <>
      <Container>
        <ButtonsWrapper>
          <Button
            className={ filter === 'latests' ? 'selected' : '' }
            onClick={ () => {
              setFilter('latests');
              setSearchInput('');
            } }
          >
            Mais recentes
          </Button>
          <Button
            className={ filter === 'Release' ? 'selected' : '' }
            onClick={ () => {
              setFilter('Release');
              setSearchInput('');
            } }
          >
            Release
          </Button>
          <Button
            className={ filter === 'Notícia' ? 'selected' : '' }
            onClick={ () => {
              setFilter('Notícia');
              setSearchInput('');
            } }
          >
            Notícias
          </Button>
          <Button
            className={ filter === 'favorites' ? 'selected' : '' }
            onClick={ () => {
              setFilter('favorites');
              setSearchInput('');
            } }
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
