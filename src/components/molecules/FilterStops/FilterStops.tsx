import React from 'react';

import { FilterWrapper } from '../../molecules';
import { Checkbox, ICheckbox } from '../../atoms';
import { StopFilters } from '../../../constants';

interface IFilterStops {
  checkboxes: ICheckbox[];
}

type IProps = IFilterStops & {
  onChangeStops: (value: StopFilters) => void;
};

export const FilterStops: React.FC<IProps> = ({ checkboxes, onChangeStops }) => {
  const onChangeHandler = (value: StopFilters) => {
    onChangeStops(value);
  };

  return (
    <FilterWrapper title="Количество пересадок">
      {
        checkboxes.map(({ label, checked, value, disabled }) => (
          <Checkbox
            key={value}
            value={value}
            label={label}
            checked={checked}
            disabled={disabled}
            onChange={onChangeHandler}
          />
        ))
      }
    </FilterWrapper>
  );
};
