import { formatDistance, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function getDate() {
  const date = new Date();
  return format(date, 'EEEE, dd \'de\' MMMM, yyyy', { locale: ptBR });
}

function getDifference(apiDate: string) {
  const [date, time] = apiDate.split(' ');
  const [day, month, year] = date.split('/').map(Number);
  const [hours, minutes, seconds] = time.split(':').map(Number);
  const now = new Date();

  const publication = new Date(year, month - 1, day, hours, minutes, seconds);
  const difference = formatDistance(publication, now, { locale: ptBR, addSuffix: true });

  return difference;
}

export {
  getDate,
  getDifference,
};
