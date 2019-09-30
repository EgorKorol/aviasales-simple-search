import React from 'react';

import './TicketsList.css';
import { ITicket, Ticket, Loader, TicketsMessageTemplate } from '../../atoms';

const pluralize = require('numeralize-ru').pluralize;

export interface IProps {
  allTicketsLength: number;
  tickets: ITicket[];
  isLoading: boolean;
  isError: boolean;
  onClearFilters: () => void;
  onRepeatSearch: () => void;
}

const getTicketsView = (
  { tickets, isLoading, isError, allTicketsLength, onClearFilters, onRepeatSearch }: IProps
) => {
  const onClearFiltersHandler = () => {
    onClearFilters();
  };

  const onRepeatSearchHandler = () => {
    onRepeatSearch();
  };

  if (isLoading) {
    return (
      <div className="tickets-list tickets-list--loading card">
        <Loader />
      </div>
    );
  }

  if (!tickets.length) {
    return (
      <TicketsMessageTemplate
        text={`Мы нашли ${allTicketsLength} ${pluralize(allTicketsLength, 'рейс', 'рейса', 'рейсов')}, но ни один не соответствует заданным фильтрам.`}
        buttonText="Расслабить фильтры"
        onClick={onClearFiltersHandler}
      />
    );
  }

  if (isError) {
    return (
      <TicketsMessageTemplate
        text="Произошла ошибка при запросе на сервер, пожалуйста повторите поиск"
        buttonText="Повторить поиск"
        onClick={onRepeatSearchHandler}
      />
    );
  }

  return (
    <ul className="tickets-list">
      {
        tickets.slice(0, 5).map(({ price, carrier, segments }, index) => (
          <li className="tickets-list__item" key={`${index}-${carrier}`}>
            <Ticket
              price={price}
              carrier={carrier}
              segments={segments}
            />
          </li>
        ))
      }
    </ul>
  );
};

export const TicketsList: React.FC<IProps> = (props) => {
  return getTicketsView(props);
};
