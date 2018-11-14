import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import App from '../components/App/App';
import SearchBar from '../components/SearchBar/SearchBar';
import RestaurantList from '../components/RestaurantList/RestaurantList';
import { Card } from 'semantic-ui-react';
import Utility from '../controller/Utility/Utility';
import restaurants from '../data/restaurants';
import * as constants from '../components/App/constants';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('has SearchBar and RestaurantList', () => {
    const appComponent = Enzyme.mount(<App />);
    expect(appComponent.find(SearchBar)).to.have.lengthOf(1);
    expect(appComponent.find(RestaurantList)).to.have.lengthOf(1);
  });
  it('base structure of restaurants is correct', () => {
    const appComponent = Enzyme.mount(<App />);

    // we need all 4 statuses set before we add/filter restaurants
    let restaurantsByStatus = appComponent.instance().getRestaurantBaseStructure();
    expect(constants.status.FAVORITE in restaurantsByStatus).to.equal(true);
    expect(constants.status.OPEN in restaurantsByStatus).to.equal(true);
    expect(constants.status.AHEAD in restaurantsByStatus).to.equal(true);
    expect(constants.status.CLOSED in restaurantsByStatus).to.equal(true);
  });
  it('restaurants shown correctly', () => {
    const appComponent = Enzyme.mount(<App />);

    // we need all 4 statuses set before we add/filter restaurants
    let restaurantsByStatus = appComponent.instance().getRestaurantBaseStructure();
    // cache number of restaurants to make sure we do not lose any
    let numRestaurants = restaurants.restaurants.length;

    restaurantsByStatus = Utility.createPropertyGroups(
      restaurantsByStatus,
      restaurants.restaurants,
      'status'
    );
    // set grouped restaurants on component state
    appComponent.setState({restaurantsByStatus});
    // every restaurant is in a Card Component so the number must be equal
    expect(appComponent.find(Card).length).to.equal(numRestaurants);
    // we need a favorite button on each card
    expect(appComponent.find(Card).find('button').length).to.equal(numRestaurants);
  });
  it('add to favorites works', () => {
    const appComponent = Enzyme.mount(<App />);

    // we need all 4 statuses set before we add/filter restaurants
    let restaurantsByStatus = appComponent.instance().getRestaurantBaseStructure();

    restaurantsByStatus = Utility.createPropertyGroups(
      restaurantsByStatus,
      restaurants.restaurants,
      'status'
    );
    // set grouped restaurants on component state
    appComponent.setState({restaurantsByStatus});
    // add first restaurant to favorites
    appComponent.find(Card).first().find('button').simulate('click');

    let changedRestaurants = appComponent.state().restaurantsByStatus;
    let favorites = changedRestaurants[constants.status.FAVORITE];
    expect(favorites.length).to.equal(1);
  });
});
