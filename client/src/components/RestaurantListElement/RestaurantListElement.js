import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import StarRatings from 'react-star-ratings';

const style = {
  rating: {
    margin: '5px 0 0 0'
  }
}

class RestaurantListElement extends Component {

  render() {
    let element = this.props.element;
    let key = this.props.count;
    console.log(element.name + ': ' + element.sortingValues.ratingAverage);
    return(
      <Card
        key={key}
        fluid
        color='orange'
        header={() => {
          let name = element.name;
          let rating = <div style={style.rating}><StarRatings
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
        description={this.props.currentFilter.text + ': ' + element.sortingValues[this.props.currentFilter.value] }
        />
    );
  }
}

export default RestaurantListElement;
