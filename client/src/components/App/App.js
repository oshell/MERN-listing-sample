import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import RestaurantList from '../RestaurantList/RestaurantList';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  render() {
    return(
      <Container>
        <SearchBar />
        <RestaurantList />
      </Container>
    );
  }
}

export default App;
