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

const sortingClasses = {
  desc: 'sort amount down icon',
  asc: 'sort amount up icon'
}


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: 'desc'
    };
  }

  render() {
    return(
      <div style={style.wrapper}>
        <Input
          onChange={(e) => {this.props.search(e.target.value);}}
          placeholder='Search...' />
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
            this.props.filterRestaurants(data.value, this.state.sorting);
          }}
          text={this.props.currentFilter.text}
        />
      <button className="ui icon button"
          style={style.filter}
          onClick={()=>{
            // cache var, since accessing right after setting will cause bugs
            let sorting = this.state.sorting;

            if (sorting === 'desc') {
              this.setState({sorting: 'asc'});
              sorting = 'asc';
            } else {
              this.setState({sorting: 'desc'});
              sorting = 'desc';
            }

            this.props.filterRestaurants(
              this.props.currentFilter.value,
              sorting
            );
          }}>
          <i className={sortingClasses[this.state.sorting]}></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
