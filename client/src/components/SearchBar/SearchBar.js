import React, { Component } from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const style = {
  wrapper: {
    margin: '20px 0'
  },
  filter: {
    margin: '0 0 0 20px'
  }
}


class SearchBar extends Component {

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
          options={this.props.filters}
          search
          defaultValue='0'
          onChange={(e, data) => {
            this.props.changeFilter(data.value);
            this.props.filterRestaurants(data.value, 'asc');
          }}
          text={this.props.currentFilter.text}
        />
      </div>
    );
  }
}

export default SearchBar;
