import axios from 'axios';
import axiosRetry from 'axios-retry';

import { ITicket } from '../components/atoms/Ticket/Ticket';

axiosRetry(axios, { retries: 3 });

export const apiGetSearchId = (): Promise<{ searchId: string }> => {
  return axios.get(`https://front-test.beta.aviasales.ru/search`)
    .then(({ data }) => data)
};

export const apiGetTickets = (searchId: string): Promise<{ stop: boolean, tickets: ITicket[] }> => {
  return axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
    .then(({ data }) => data)
};
