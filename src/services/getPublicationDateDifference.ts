function getPublicationDateDifference(differenceInMilliseconds: number) {
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  const differenceInHours = Math
    .floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (differenceInDays === 0) {
    if (differenceInHours === 0) {
      return 'menos de uma hora atŕas';
    }
    if (differenceInHours === 1) {
      return '1 hora atrás';
    }
    return `${differenceInHours} horas atrás`;
  }

  if (differenceInDays === 1) {
    return '1 dias atrás';
  }
  return `${differenceInDays} dias atrás`;
}

export default getPublicationDateDifference;
