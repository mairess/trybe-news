import { NewsTypeJson } from '../types';

async function getTheNews() {
  const API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const response = await fetch(API);
  const data = await response.json();

  data.items.forEach((news: NewsTypeJson) => {
    news.imagens = JSON.parse(news.imagens);
  });

  return data;
}

export default getTheNews;
