/* eslint-disable func-names */

import City from 'city';

function Country(name) {
  this.name = name;
}

Country.prototype.editCountry = function (name, cities) {
  this.name = name;
  this.cities = cities;
};
