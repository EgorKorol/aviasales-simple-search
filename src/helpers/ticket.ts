export const getFormattedPrice = (price: number): string => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Р`;
};

export const getTransfers = (stops: string[]): string => {
  return stops.length
    ? stops.join(', ')
    : '–';
};
