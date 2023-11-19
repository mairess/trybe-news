import { ImagesType, TheNewsType } from '../types';

const baseURL = 'https://agenciadenoticias.ibge.gov.br/';

function iterateAndConvert(imagesToConvert: ImagesType) {
  if (imagesToConvert) {
    (Object.keys(imagesToConvert) as Array<keyof ImagesType>).forEach((key) => {
      const value = imagesToConvert[key];

      if (value) {
        imagesToConvert[key] = baseURL + value;
      }
    });
  }
}

function convertImagesToLink(dataToConvert: TheNewsType) {
  if (dataToConvert) {
    dataToConvert.forEach((news) => {
      iterateAndConvert(news.imagens);
    });
  }
}

export default convertImagesToLink;
