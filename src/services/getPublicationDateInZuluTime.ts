function getPublicationDateInZuluTime(publication_date : string) {
  const partesData = publication_date.split('/');

  const day = Number(partesData[0]);
  const mouth = Number(partesData[1]);
  const year = Number(partesData[2].split(' ')[0]);

  const hours = Number(partesData[2].split(' ')[1].split(':')[0]);
  const minutes = +partesData[2].split(' ')[1].split(':')[1];
  const seconds = +partesData[2].split(' ')[1].split(':')[2];

  const publishedOn = new Date(year, mouth - 1, day, hours, minutes, seconds);

  return publishedOn;
}

export default getPublicationDateInZuluTime;
