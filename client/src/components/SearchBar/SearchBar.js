import React, { Component } from 'react';
import { Dropdown, Input } from 'semantic-ui-react'

const style = {
  wrapper: {
    margin: '20px 0'
  },
  filter: {
    margin: '0 0 0 20px'
  }
}

const filters = [
  {
    text: 'Best Match',
    value: 'bestMatch',
  },
  {
    text: 'Newest',
    value: 'newest',
  },
  {
    text: 'Rating',
    value: 'ratingAverage',
  },
  {
    text: 'Distance',
    value: 'distance',
  },
  {
    text: 'Popularity',
    value: 'popularity',
  },
  {
    text: 'Price',
    value: 'averageProductPrice',
  },
  {
    text: 'Delivery Costs',
    value: 'deliveryCosts',
  },
  {
    text: 'Minimum Cost',
    value: 'minCost',
  },
];

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentFilter: filters[0]
      }
  }

  render() {
    return(
      <div style={style.wrapper}>
        <Input placeholder='Search...' />
        <Dropdown
          style={style.filter}
          button
          className='icon'
          floating
          labeled
          icon='filter'
          options={filters}
          search
          defaultValue='0'
          onChange={(e, data) => {
            const index = filters.map(o => o.value).indexOf(data.value);
            this.setState({
              currentFilter: filters[index]
            });
          }}
          text={this.state.currentFilter.text}
        />
      </div>
    );
  }
}

export default SearchBar;
