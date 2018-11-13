import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react'
import RestaurantListElement from '../RestaurantListElement/RestaurantListElement';

const openStateOrder = ['open', 'order ahead', 'closed'];

class RestaurantList extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    let elements = [];
    let elemCount = 0;

    for (let property in openStateOrder) {
      ++elemCount;
      let key = openStateOrder[property];
      let restaurants = this.props.restaurantsByStatus[key] || [];

      let subElements = [];
      let first = true;

      for (let restaurant of restaurants) {
          if (first) {
            subElements.push(<Header key={++elemCount}>{key}</Header>);
            first = false;
            ++elemCount;
          }
          subElements.push(<RestaurantListElement
            key={++elemCount}
            currentFilter={this.props.currentFilter}
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
