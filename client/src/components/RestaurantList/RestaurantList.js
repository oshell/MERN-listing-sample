import React, { Component } from 'react';
import { Card, Rating, Header } from 'semantic-ui-react'
import api from '../../controller/Api/Api';
import Utility from './../../controller/Utility/Utility';

const style = {
  rating: {
    margin: '0 0 0 10px'
  }
}

const openStateOrder = ['open', 'order ahead', 'closed'];

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsByStatus: []
    }
  }

  componentDidMount() {
    api.fetchRestaurants().then((result) => {
      let restaurantsByStatus = Utility.structureGroupsByProperty(
        result.data.restaurants,
        'status'
      );

      this.setState({
        restaurantsByStatus: restaurantsByStatus
      });
    });
  }

  createRestaurantCard(element, key) {
    return <Card
      key={key}
      fluid
      color='blue'
      header={() => {
        let name = element.name;
        let rating = <Rating
          style={style.rating}
          maxRating={5}
          defaultRating={element.sortingValues.ratingAverage}
          icon='star'
          size='tiny' />
        return [name, rating];
      }}
      meta={element.status}
      />
  }

  render() {
    let elements = [];
    let elemCount = 0;

    for (let property in openStateOrder) {
      ++elemCount;
      let key = openStateOrder[property];
      let restaurants = this.state.restaurantsByStatus[key] || [];

      let subElements = [];
      let first = true;

      for (let restaurant of restaurants) {
          if (first) {
            subElements.push(<Header key={elemCount}>{key}</Header>);
            first = false;
            ++elemCount;
          }
          subElements.push(this.createRestaurantCard(restaurant, ++elemCount));
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
