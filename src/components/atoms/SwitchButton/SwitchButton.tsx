import React from 'react';

import './SwitchButton.css';
import { TypeFilters } from '../../../constants';

export interface ISwitchButton {
  label: string;
  checked: boolean;
  value: TypeFilters;
  name: string;
  disabled?: boolean;
}

type IProps = ISwitchButton & {
  onChange: (value: TypeFilters) => void;
};

export const SwitchButton: React.FC<IProps> = ({ label, checked, disabled, value, name, onChange }) => {
  const onChangeHandler = () => {
    onChange(value);
  };

  return (
    <label className="switch-button text-uppercase font-weight-600">
      <input
        className="visually-hidden switch-button__input"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChangeHandler}
      />
      <div className="switch-button__button">{label}</div>
    </label>
  );
};
