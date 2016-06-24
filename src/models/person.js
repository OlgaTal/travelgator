/* eslint-disable func-names */
import City from 'city';

function Person(name, age, gender, balance, photo) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.balance = balance;
  this.photo = photo;
  this.cities = [];
}

Person.prototype.editPerson = function (name, age, gender, balance, photo, cities) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.balance = balance;
  this.photo = photo;
  this.cities = cities;
};

Person.prototype.purchase = function (city) {
  if (this.balance < city.amount) {
    return (new Error('Not enough money'));
  }
  this.cities.push(city.name);
  this.balance -= city.amount;
  city.persons.push(this);
  return 'did thing';
};
