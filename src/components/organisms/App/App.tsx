import React, { Component } from 'react'

import './App.css';
import logo from '../../../assets/logo.svg';
import { ICheckbox, ISwitchButton, ITicket } from '../../atoms';
import { FilterStops, SwitchTicketTypes, TicketsList } from '../../molecules';
import { apiGetSearchId, apiGetTickets } from '../../../api';
import { stopFilters, typeFilters, StopFilters, TypeFilters } from '../../../constants';
import { priceSort, durationSort, stopsSort } from '../../../helpers';

interface IAppState {
  searchId: string;
  isTicketsLoading: boolean;
  isTicketsError: boolean;
  stopFilters: ICheckbox[];
  typeFilters: ISwitchButton[];
  tickets: ITicket[];
  filteredTickets: ITicket[];
}

interface IProps {}

export default class App extends Component<IProps, IAppState> {
  constructor(props: Readonly<IProps>) {
    super(props);

    this.state = {
      searchId: '',
      isTicketsLoading: false,
      isTicketsError: false,
      stopFilters,
      typeFilters,
      tickets: [],
      filteredTickets: [],
    };
  }

  componentDidMount() {
    this.getTicketsWithoutSearchId();
  }

  getTicketsWithoutSearchId() {
    this.setState({
      isTicketsLoading: true,
    });

    apiGetSearchId()
      .then(({ searchId }) => {
        this.setState({
          searchId,
        });

        this.getTicketsWithSearchId(searchId);
      })
      .catch((error) => {
        this.setTicketsLoadError(error);
      });
  }

  getTicketsWithSearchId(searchId: string) {
    apiGetTickets(searchId)
      .then(({ tickets, stop }) => {
        /**
         * Get all patches till stop is true
         */
        if (stop) {
          this.setState((state) => ({
            tickets: [...state.tickets, ...tickets],
            isTicketsLoading: false,
          }), () => this.updateTicketsByStopsFilter(this.state.stopFilters));

          return;
        }

        this.setState(() => ({
          tickets: [...this.state.tickets, ...tickets],
        }));

        this.getTicketsWithSearchId(searchId);
      })
      .catch((error) => {
        this.setTicketsLoadError(error);
      });
  }

  setTicketsLoadError(error: any) {
    console.error(error);

    this.setState({
      isTicketsError: true,
      isTicketsLoading: false,
    });
  }
  /**
   * If all checkboxes except "All" are selected.
   */
  selectDeselectAllStopsFilters(stopFilters: ICheckbox[]) {
    const allFilterIndex = stopFilters.findIndex(({ value }) => value === StopFilters.All);
    const isImplicitSelectionOfEverything = stopFilters.every(({ checked }, index) => {
      return checked && allFilterIndex !== index;
    });

    stopFilters[allFilterIndex].checked = isImplicitSelectionOfEverything;

    this.setState({
      stopFilters,
    });
  }

  updateTicketsByStopsFilter(stopFilters: ICheckbox[]) {
    let updatedTickets: ITicket[] = [];

    stopFilters.forEach(({ checked, value }) => {
      if (checked) {
        /**
         * If value === StopFilters.All return all tickets immediately
         */
        value === StopFilters.All
          ? updatedTickets = this.state.tickets
          : updatedTickets = [...updatedTickets, ...this.handleChangeStop(value)];
      }
    });

    this.setState(() => ({
      filteredTickets: updatedTickets,
    }), () => this.updateTicketsByTypesFilter(this.state.typeFilters));
  }

  updateTicketsByTypesFilter(typesFilterData: ISwitchButton[]) {
    typesFilterData.forEach(({ checked, value }) => {
      if (checked) {
        this.handleChangeType(value);
      }
    });
  }

  handleChangeStop(value: StopFilters): ITicket[] {
    switch (value) {
      case StopFilters.Empty:
        return stopsSort(this.state.tickets, 0);
      case StopFilters.One:
        return stopsSort(this.state.tickets, 1);
      case StopFilters.Two:
        return stopsSort(this.state.tickets, 2);
      case StopFilters.Three:
        return stopsSort(this.state.tickets, 3);
      default:
        return [];
    }
  }

  setStopFilters = (value: StopFilters) => {
    if (value === StopFilters.All) {
      const isAllChecked = this.state.stopFilters.every(({ checked }) => checked);
      const updatedStopsFilterData = this.state.stopFilters.map((item) => ({ ...item, checked: !isAllChecked }));

      this.setState(() => ({
        stopFilters: updatedStopsFilterData,
      }), () => this.updateTicketsByStopsFilter(this.state.stopFilters));

      return;
    }

    const newStopsFilterData = this.state.stopFilters.map((item) => {
      return {
        ...item,
        checked: item.value === value
          ? !item.checked
          : item.checked,
      };
    });

    this.setState(() => ({
      stopFilters: newStopsFilterData,
    }), () => this.updateTicketsByStopsFilter(this.state.stopFilters));

    this.selectDeselectAllStopsFilters(newStopsFilterData);
  }

  handleChangeType(value: TypeFilters) {
    switch (value) {
      case TypeFilters.Cheap:
        const cheapTickets = priceSort(this.state.filteredTickets);

        this.setState(() => ({
          filteredTickets: cheapTickets,
        }));

        break;

      case TypeFilters.Fast:
        const fastTickets = durationSort(this.state.filteredTickets);

        this.setState(() => ({
          filteredTickets: fastTickets,
        }));

        break;
    
      default:
        break;
    }
  }

  setTypeFilters = (value: TypeFilters) => {
    const updatedTypeFilters = this.state.typeFilters.map((item) => {
      return { ...item, checked: item.value === value };
    });

    this.setState(() => ({
      typeFilters: updatedTypeFilters,
    }), () => this.updateTicketsByTypesFilter(this.state.typeFilters));
  }

  repeatLastSearch = () => {
    this.setState({
      isTicketsError: false,
      isTicketsLoading: true,
    });

    this.getTicketsWithSearchId(this.state.searchId);
  }

  clearFilters = () => {
    this.setState((state) => ({
      stopFilters,
      filteredTickets: state.tickets,
    }));
  }

  render() {
    return (
      <main className="app">
        <div className="app__header">
          <img src={logo} alt="Logo of Aviasales"/>
        </div>
        <div className="app__content">
          <aside className="app__aside card">
            <FilterStops
              checkboxes={this.state.stopFilters}
              onChangeStops={this.setStopFilters}
            />
          </aside>
          <section className="app__section">
            <SwitchTicketTypes
              switchButtons={this.state.typeFilters}
              onChangeType={this.setTypeFilters}
            />
            <TicketsList
              allTicketsLength={this.state.tickets.length}
              isLoading={this.state.isTicketsLoading}
              isError={this.state.isTicketsError}
              tickets={this.state.filteredTickets}
              onClearFilters={this.clearFilters}
              onRepeatSearch={this.repeatLastSearch}
            />
          </section>
        </div>
      </main>
    );
  };
};
