import React from 'react';

interface IProps {
  a11yLegend: string;
  children: any;
}

export const SwitchWrapper: React.FC<IProps> = ({ a11yLegend, children }) => {
  return (
    <fieldset className="switch-wrapper">
      <legend className="visually-hidden">{a11yLegend}</legend>
      {children}
    </fieldset>
  );
};
