import React, { Component } from 'react';
import { Card, Header, Container } from 'semantic-ui-react'
import RestaurantListElement from '../RestaurantListElement/RestaurantListElement';
import * as constants from '../App/constants';

const style = {
  header: {
    margin: '15px 0 0 0'
  }
}

class RestaurantList extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    let elements = [];
    let elemCount = 0;

    for (let property in constants.status) {
      ++elemCount;
      let key = constants.status[property];
      let restaurants = this.props.restaurantsByStatus[key] || [];

      let subElements = [];
      let first = true;

      for (let restaurant of restaurants) {
          if (first) {
            subElements.push(<Container>
              <Header style={style.header} key={++elemCount}>{key}</Header>
            </Container>);
            first = false;
            ++elemCount;
          }
          subElements.push(<RestaurantListElement
            key={++elemCount}
            searchTerm={this.props.searchTerm}
            status={constants.status[property]}
            currentFilter={this.props.currentFilter}
            toggleFavourite={this.props.toggleFavourite}
            element={restaurant}
            counter={++elemCount} />);
      }

      elements = [...elements, ...subElements];
    }

    return(
      <Card.Group>
        {elements}
      </Card.Group>
    );
  }
}

export default RestaurantList;
