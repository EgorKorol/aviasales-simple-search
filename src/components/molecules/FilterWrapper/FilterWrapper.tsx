import React from 'react';

import './FilterWrapper.css';

interface IProps {
  title: string;
  children: any;
}

export const FilterWrapper: React.FC<IProps> = ({ title, children }) => {
  return (
    <fieldset className="filter-wrapper">
      <legend className="filter-wrapper__legend text-uppercase font-weight-600">{title}</legend> 
      {children}
    </fieldset>
  );
};
