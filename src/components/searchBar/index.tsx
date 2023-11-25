import { useContext } from 'react';
import { Input } from './style';
import NewsContext from '../../context/NewsContext';

function SearchBar() {
  const { handleChange } = useContext(NewsContext);

  return (
    <Input
      onChange={ handleChange }
      type="text"
      name=""
      id=""
    />
  );
}

export default SearchBar;
