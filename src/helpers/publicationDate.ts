function publicationDate(publication_date : string) {
  const dateParts = publication_date.split('/');

  const day = Number(dateParts[0]);
  const mouth = Number(dateParts[1]);
  const year = Number(dateParts[2].split(' ')[0]);

  const hours = Number(dateParts[2].split(' ')[1].split(':')[0]);
  const minutes = +dateParts[2].split(' ')[1].split(':')[1];
  const seconds = +dateParts[2].split(' ')[1].split(':')[2];

  const publishedOn = new Date(year, mouth - 1, day, hours, minutes, seconds);

  return publishedOn;
}

export default publicationDate;
