import { ICheckbox, ISwitchButton } from '../components/atoms';

export enum StopFilters {
  All = 'all',
  Empty = 'withoutStops',
  One = '1stop',
  Two = '2stops',
  Three = '3stops',
}

export enum TypeFilters {
  Cheap = 'cheap',
  Fast = 'fast',
}

export const stopFilters: ICheckbox[] = [
  {
    label: 'Все',
    value: StopFilters.All,
    checked: true,
  },
  {
    label: 'Без пересадок',
    value: StopFilters.Empty,
    checked: true,
  },
  {
    label: '1 пересадка',
    value: StopFilters.One,
    checked: true,
  },
  {
    label: '2 пересадки',
    value: StopFilters.Two,
    checked: true,
  },
  {
    label: '3 пересадки',
    value: StopFilters.Three,
    checked: true,
  },
];

export const typeFilters: ISwitchButton[] = [
  {
    label: 'Самый дешевый',
    value: TypeFilters.Cheap,
    name: 'type',
    checked: true,
  },
  {
    label: 'Самый быстрый',
    value: TypeFilters.Fast,
    name: 'type',
    checked: false,
  },
];
