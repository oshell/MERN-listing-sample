import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import StarRatings from 'react-star-ratings';
import * as constants from '../App/constants';

const style = {
  rating: {
    margin: '5px 0 0 0'
  },
  button: {
    float: 'right',
    position: 'absolute',
    top: '10px',
    right: '10px'
  }
}

const cashFilters = [
  "averageProductPrice",
  "deliveryCosts",
  "minCost"
]

class RestaurantListElement extends Component {

  render() {
    let element = this.props.element;
    let counter = this.props.counter;
    let value = element.sortingValues[this.props.currentFilter.value];

    if (cashFilters.includes(this.props.currentFilter.value)) {
      value = value/100;
    }

    return(
      <Card
        key={counter}
        fluid
        color='orange'
        header={() => {
          let name = <div key={++counter}>{element.name}</div>;
          let rating = <div key={++counter} style={style.rating}><StarRatings
              rating={element.sortingValues.ratingAverage}
              starRatedColor='orange'
              numberOfStars={5}
              name='rating'
              starDimension='15px'
              starSpacing='3px'
            /></div>;
          return [name, rating];
        }}
        meta={element.status}
        description={() => {
          let isFavorite = this.props.status === constants.status.FAVORITE;
          let cssClass = isFavorite ? 'heart icon' : 'heart outline icon';
          let filterValue =
            <div key={++counter}>
              {this.props.currentFilter.text + ': ' + value}
            </div>;
          let favouriteButton =
            <button key={++counter} className="ui icon button"
                    style={style.button}
                    onClick={()=>{
                      this.props.toggleFavourite(element);
                    }}>
                    <i className={cssClass}></i>
                  </button>;
          return [filterValue, favouriteButton];
        }}
        />
    );
  }
}

export default RestaurantListElement;
