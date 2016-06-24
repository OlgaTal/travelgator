/* eslint-disable func-names */

import Person from 'person';

function City(name, country, amount, photo) {
  this.name = name;
  this.amount = amount;
  this.photo = photo;
  this.country = country;
  this.persons = [];
  this.code = '';
}

City.prototype.editCity = function (name, country, amount, photo, code) {
  this.name = name;
  this.amount = amount;
  this.photo = photo;
  this.country = country;
  this.code = code;
};
