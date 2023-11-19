import publicationDate from './publicationDate';
import getDifferenceInDaysAndHours from './getDifferenceInDaysAndHours';

function getPublicationDateDifference(differenceInMilliseconds: number) {
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  const differenceInHours = Math
    .floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return getDifferenceInDaysAndHours(differenceInDays, differenceInHours);
}

function showPublicationTimeDifference(publication_date : string) {
  const publishedOn = publicationDate(publication_date);

  const today = new Date();

  const differenceInMilliseconds = today.getTime() - publishedOn.getTime();

  return getPublicationDateDifference(differenceInMilliseconds);
}

export default showPublicationTimeDifference;
