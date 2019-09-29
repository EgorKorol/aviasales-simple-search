import React from 'react';

import './SwitchTicketTypes.css';
import { SwitchButton, ISwitchButton } from '../../atoms';
import { SwitchWrapper } from '../../molecules';
import { TypeFilters } from '../../../constants';

interface ISwitchTicketTypes {
  switchButtons: ISwitchButton[];
}

type IProps = ISwitchTicketTypes & {
  onChangeType: (value: TypeFilters) => void;
};

export const SwitchTicketTypes: React.FC<IProps> = ({ switchButtons, onChangeType }) => {
  const onChangeHandler = (value: TypeFilters) => {
    onChangeType(value);
  };

  return (
    <SwitchWrapper a11yLegend="Количество пересадок">
      <div className="switch-ticket-types">
        {
          switchButtons.map(({ label, checked, value, name, disabled }) => (
            <SwitchButton
              key={value}
              name={name}
              value={value}
              label={label}
              checked={checked}
              disabled={disabled}
              onChange={onChangeHandler}
            />
          ))
        }
      </div>
    </SwitchWrapper>
  );
};
