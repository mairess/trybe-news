import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';

function FeaturedNews() {
  const { theNews, baseURL } = useContext(NewsContext);
  const [latestOne] = theNews;
  console.log(latestOne);

  return (
    <div>
      {latestOne && (
        <div key={ latestOne.id }>
          <h1>{latestOne.titulo}</h1>
          <img
            src={ baseURL + latestOne.imagens.image_intro }
            alt={ `Illustration for ${latestOne.titulo}` }
          />
          <p>{latestOne.introducao}</p>
        </div>
      )}
    </div>
  );
}

export default FeaturedNews;
