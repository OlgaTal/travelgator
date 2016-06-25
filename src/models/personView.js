import CityView from './cityView';

function PersonView(person) {
  this.id = person._id;
  this.name = person.name;
  this.age = person.age;
  this.gender = person.gender;
  this.balance = person.balance;
  this.cities = person.cities;
  this.photo = person.photo;


// this.priority = priorities.find(p => p.value === task.priority);
//   const c1 = new City();
//   c1.name='Chicago';
//   c1.country='US';
//   c1.id=1;
}

module.exports = PersonView;
