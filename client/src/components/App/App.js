import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import RestaurantList from '../RestaurantList/RestaurantList';
import SearchBar from '../SearchBar/SearchBar';
import api from '../../controller/Api/Api';
import Utility from './../../controller/Utility/Utility';
import _ from 'lodash';
import * as constants from './constants';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurantsByStatus: [],
      currentFilter: constants.filters[0]
    }

    this.getRestaurants = this.getRestaurants.bind(this);
    this.filterRestaurants = this.filterRestaurants.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  getRestaurants() {
    api.fetchRestaurants().then((result) => {
      let restaurantsByStatus = Utility.structureGroupsByProperty(
        result.data.restaurants,
        'status'
      );

      this.setState({restaurantsByStatus});
    });
  }

  filterRestaurants(property, sorting) {
    let open_restaurants = _.orderBy(
      this.state.restaurantsByStatus[constants.status.OPEN],
      ['sortingValues.' + property],
      [sorting]
    );

    let ahead_restaurants = _.orderBy(
      this.state.restaurantsByStatus[constants.status.AHEAD],
      ['sortingValues.' + property],
      [sorting]
    );

    let closed_restaurants = _.orderBy(
      this.state.restaurantsByStatus[constants.status.CLOSED],
      ['sortingValues.' + property],
      [sorting]
    );

    this.setState({
      restaurantsByStatus: {
        'open': open_restaurants,
        'order ahead': ahead_restaurants,
        'closed': closed_restaurants
      }
    });
  }

  changeFilter(value) {
    const index = constants.filters.map(o => o.value).indexOf(value);
    this.setState({
      currentFilter: constants.filters[index]
    });
  }

  render() {
    return(
      <Container>
        <SearchBar
          changeFilter={this.changeFilter}
          filters={constants.filters}
          currentFilter={this.state.currentFilter}
          filterRestaurants={this.filterRestaurants} />
        <RestaurantList
          currentFilter={this.state.currentFilter}
          getRestaurants={this.getRestaurants}
          restaurantsByStatus={this.state.restaurantsByStatus} />
      </Container>
    );
  }
}

export default App;
