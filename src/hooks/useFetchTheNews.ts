import { useEffect, useState } from 'react';
import { TheNewsType } from '../types';
import parseImages from '../helpers/parseImages';
import convertImagesToLink from '../helpers/convertImagesToLink';
import apiDataMock from '../tests/mocks/apiDataMock';

function useFetchTheNews() {
  const [theNews, setTheNews] = useState<TheNewsType>(apiDataMock);
  const [loading, setLoading] = useState(false);

  const API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

  useEffect(() => {
    const fetchTheNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(API);
        const data = await response.json();

        parseImages(data);
        convertImagesToLink(data.items);

        setTheNews(data.items);
      } catch (error: any) {
        console.log(`Request error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchTheNews();
  }, []);

  return { theNews, setTheNews, loading };
}

export default useFetchTheNews;
