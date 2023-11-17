import { useEffect, useState } from 'react';
import { NewsTypeJson, TheNewsType } from '../types';

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

        data.items.forEach((news: NewsTypeJson) => {
          news.imagens = JSON.parse(news.imagens);
        });

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
