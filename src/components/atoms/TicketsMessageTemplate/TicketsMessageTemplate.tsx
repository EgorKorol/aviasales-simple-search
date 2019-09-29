import React from 'react';

import './TicketsMessageTemplate.css';

interface IProps {
  text: string;
  buttonText: string;
  onClick: () => void;
}

export const TicketsMessageTemplate: React.FC<IProps> = ({ text, buttonText, onClick }) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <div className="tickets-message-template card">
      <p className="tickets-message-template__text">{text}</p>
      <button
        className="tickets-message-template__button text-uppercase font-weight-600"
        type="button"
        onClick={onClickHandler}
      >
        {buttonText}
      </button>
    </div>
  );
};
