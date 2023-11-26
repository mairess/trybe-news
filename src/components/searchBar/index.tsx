import { useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import { Input, Container, Wrapper } from './style';
import NewsContext from '../../context/NewsContext';

function SearchBar() {
  const { handleChange } = useContext(NewsContext);

  return (
    <Container>
      <Wrapper>
        <GoSearch />
      </Wrapper>
      <Input
        placeholder="Busque aqui"
        onChange={ handleChange }
        type="text"
        name=""
        id=""
      />
    </Container>
  );
}

export default SearchBar;
