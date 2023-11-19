import { useEffect, useState } from 'react';
import { TheNewsType } from '../types';
import parseImages from '../helpers/parseImages';

function useFetchTheNews() {
  const [theNews, setTheNews] = useState<TheNewsType>([]);
  const [loading, setLoading] = useState(false);

  const API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const baseURL = 'https://agenciadenoticias.ibge.gov.br/';

  useEffect(() => {
    const fetchTheNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(API);
        const data = await response.json();

        parseImages(data);

        console.log(data);
        setTheNews(data.items);
      } catch (error: any) {
        console.log(`Request error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchTheNews();
  }, []);

  return { theNews, setTheNews, loading, baseURL };
}

export default useFetchTheNews;
