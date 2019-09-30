import React from 'react';

import './Ticket.css';
import { durationConvert, timeConvert, getTransfers, getFormattedPrice } from '../../../helpers';

const pluralize = require('numeralize-ru').pluralize;

export interface ITicket {
  price: number;
  carrier: string;
  segments: ISegment[];
}

interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

type IProps = ITicket;

export const Ticket: React.FC<IProps> = ({ price, carrier, segments }) => {
  const [from, to] = segments;

  return (
    <div className="ticket card">
      <div className="ticket__header">
        <p className="ticket__price color-blue font-weight-600">{getFormattedPrice(price)}</p>
        {
          /**
           * Alt is empty for a11y
           */
          // @ts-ignore
          <img
            src={`http://pics.avs.io/99/36/${carrier}@2x.png`}
            loading="lazy"
            width="110"
            aria-hidden="true"
            alt=""
          />
        }
      </div>
      <table className="ticket__table">
        <thead>
          <tr>
            <th className="text-uppercase color-gray">{from.destination} - {from.origin}</th>
            <th className="text-uppercase color-gray">В пути</th>
            <th className="text-uppercase color-gray">
              {from.stops.length} {pluralize(from.stops.length, 'пересадка', 'пересадки', 'пересадок')}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-weight-600">{timeConvert(Date.parse(from.date), from.duration * 60 * 1000)}</td>
            <td className="font-weight-600">{durationConvert(from.duration)}</td>
            <td className="font-weight-600">{getTransfers(from.stops)}</td>
          </tr>
        </tbody>
      </table>
      <table className="ticket__table">
        <thead>
          <tr>
            <th className="text-uppercase color-gray">{to.origin} - {to.destination}</th>
            <th className="text-uppercase color-gray">В пути</th>
            <th className="text-uppercase color-gray">
              {
                to.stops.length
                  ? to.stops.length
                  : 'без'
              } {pluralize(to.stops.length, 'пересадка', 'пересадки', 'пересадок')}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-weight-600">{timeConvert(Date.parse(to.date), to.duration * 60 * 1000)}</td>
            <td className="font-weight-600">{durationConvert(to.duration)}</td>
            <td className="font-weight-600">{getTransfers(to.stops)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
