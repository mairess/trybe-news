import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';

function FeaturedNews() {
  const { theNews, baseURL } = useContext(NewsContext);
  console.log(theNews);

  return (
    <div>
      {theNews.length > 0 && (
        <div key={ theNews[0].id }>
          <h1>{theNews[0].titulo}</h1>
          <img
            src={ baseURL + theNews[0].imagens.image_intro }
            alt={ `Illustration for ${theNews[0].titulo}` }
          />
          <p>{theNews[0].introducao}</p>
        </div>
      )}
    </div>
  );
}

export default FeaturedNews;
