import React from 'react';

import './Checkbox.css';
import { StopFilters } from '../../../constants';

export interface ICheckbox {
  label: string;
  checked: boolean;
  value: StopFilters;
  disabled?: boolean;
}

type IProps = ICheckbox & {
  onChange: (value: StopFilters) => void;
};

export const Checkbox: React.FC<IProps> = ({ label, checked, disabled, value, onChange }) => {
  const onChangeHandler = () => {
    onChange(value);
  };

  return (
    <label className="checkbox">
      <input
        className="visually-hidden checkbox__input"
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChangeHandler}
      />
      <span className="checkbox__box" />
      {label}
    </label>
  );
};
