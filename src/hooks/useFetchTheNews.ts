import { useEffect, useState } from 'react';
import { NewsTypeJson, TheNewsType } from '../types';

function useFetchTheNews() {
  const [theNews, setTheNews] = useState<TheNewsType >([]);

  const API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

  useEffect(() => {
    const fetchTheNews = async () => {
      const response = await fetch(API);
      const data = await response.json();

      data.items.forEach((news: NewsTypeJson) => {
        news.imagens = JSON.parse(news.imagens);
      });

      setTheNews(data.items);
    };
    fetchTheNews();
  }, []);

  return { theNews, setTheNews };
}

export default useFetchTheNews;
