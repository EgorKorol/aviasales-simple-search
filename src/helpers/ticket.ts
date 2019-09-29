export const getNumberOfTransfers = (stops: string[]): string => {
  if (!stops.length) {
    return 'Без пересадок';
  }

  if (stops.length === 1) {
    return '1 пересадка';
  }

  if (stops.length > 1 && stops.length < 5) {
    return `${stops.length} пересадки`;
  }

  return `${stops.length} пересадок`;
};

export const getTransfers = (stops: string[]): string => {
  return stops.length
    ? stops.join(', ')
    : '–';
};
