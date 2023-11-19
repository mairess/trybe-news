function getDifferenceInHours(differenceInHours : number) {
  switch (true) {
    case differenceInHours === 0:
      return 'menos d uma hora atrás';
    case differenceInHours === 1:
      return '1 hora atrás';
    default:
      return `${differenceInHours} horas atrás`;
  }
}

function getDifferenceInDaysAndHours(
  differenceInDays: number,
  differenceInHours: number,
) {
  switch (true) {
    case differenceInDays === 0:
      return getDifferenceInHours(differenceInHours);
    case differenceInDays === 1:
      return '1 dia atrás';
    default:
      return `${differenceInDays} dias atrás`;
  }
}

export default getDifferenceInDaysAndHours;
