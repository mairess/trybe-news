import getPublicationDate from './getPublicationDate';
import getPublicationDateDifference from './getPublicationDateDifference';

function publicationDateDifferenceTime(publication_date : string) {
  const publishedOn = getPublicationDate(publication_date);

  const today = new Date();

  const differenceInMilliseconds = today.getTime() - publishedOn.getTime();
  console.log(differenceInMilliseconds);

  return getPublicationDateDifference(differenceInMilliseconds);
}

export default publicationDateDifferenceTime;
