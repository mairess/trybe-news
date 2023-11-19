import { DataToParse } from '../types';

function parseImages(dataToParse: DataToParse) {
  if (dataToParse.items) {
    dataToParse.items.forEach((news) => {
      news.imagens = JSON.parse(news.imagens);
    });
  }
}

export default parseImages;
