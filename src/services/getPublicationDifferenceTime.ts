import getPublicationDateInZuluTime from './getPublicationDateInZuluTime';

function getPublicationDifferenceTime(publication_date : string) {
  const publishedOn = getPublicationDateInZuluTime(publication_date);

  const today = new Date();

  const difference = today.getTime() - publishedOn.getTime();

  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const differenceInHours = Math
    .floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (differenceInDays === 0) {
    if (differenceInHours === 0) {
      return 'menos de uma hora atŕas';
    } if (differenceInHours === 1) {
      return '1 hora atrás';
    }
    return `${differenceInHours} horas atrás`;
  } if (differenceInDays === 1) {
    return '1 dias atrás';
  }
  return `${differenceInHours} dias atrás`;
}

export default getPublicationDifferenceTime;
