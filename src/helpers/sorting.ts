import { ITicket } from './../components/atoms/Ticket/Ticket';

export const priceSort = (tickets: ITicket[]): ITicket[] => {
  return tickets.sort((a, b) => a.price - b.price);
};

export const durationSort = (tickets: ITicket[]): ITicket[] => {
  return tickets.sort((a, b) => {
    const aDuration = a.segments.reduce((acc, { duration }) => acc + duration, 0);
    const bDuration = b.segments.reduce((acc, { duration }) => acc + duration, 0);

    return aDuration - bDuration;
  });
};

export const stopsSort = (tickets: ITicket[], stopsNumber: number): ITicket[] => {
  return tickets.filter(({ segments }) => segments.every(({ stops }) => stops.length === stopsNumber));
};
