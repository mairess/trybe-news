import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Container, ContainerButtons } from './style';

function FilterBar() {
  const { theNews } = useContext(NewsContext);

  return (
    <Container>
      <ContainerButtons>
        <div>Mais recentes</div>
        <div>Release</div>
        <div>Notícias</div>
        <div>Favoritas</div>
      </ContainerButtons>
      {/* <div>Change view</div> */}
    </Container>
  );
}

export default FilterBar;
