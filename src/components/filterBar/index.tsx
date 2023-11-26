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
            className={ filter === 'releases' ? 'selected' : '' }
            onClick={ () => {
              setFilter('releases');
              setSearchInput('');
            } }
          >
            Release
          </Button>
          <Button
            className={ filter === 'news' ? 'selected' : '' }
            onClick={ () => {
              setFilter('news');
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
