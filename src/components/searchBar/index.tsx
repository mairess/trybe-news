import { useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import { Input, Container, Wrapper } from './style';
import NewsContext from '../../context/NewsContext';

function SearchBar() {
  const { handleChange, searchInput } = useContext(NewsContext);

  return (
    <Container>
      <Wrapper>
        <GoSearch />
      </Wrapper>
      <Input
        placeholder="Busque aqui"
        onChange={ handleChange }
        type="text"
        value={ searchInput }
      />
    </Container>
  );
}

export default SearchBar;
