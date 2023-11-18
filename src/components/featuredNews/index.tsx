import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import Card from '../card';

function FeaturedNews() {
  const { theNews } = useContext(NewsContext);
  const [latestOne] = theNews;

  return (
    <div>
      <Card />
      {/* {latestOne && (
        <div key={ latestOne.id }>
          <h1>{latestOne.titulo}</h1>
          <img
            src={ baseURL + latestOne.imagens.image_intro }
            alt={ `Illustration for ${latestOne.titulo}` }
          />
          <p>{latestOne.introducao}</p>
        </div>
      )} */}
    </div>
  );
}

export default FeaturedNews;
