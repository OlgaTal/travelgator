/* eslint-disable func-names */
import mongoose from 'mongoose';
// import City from 'city';

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  balance: Number,
  photo: String,
  age: Number,
  gender: String,
  cities: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
});

module.exports = mongoose.model('Person', personSchema);

// Person.purchase = function (city) {
//   if (this.balance < city.amount) {
//     return (new Error('Not enough money'));
//   }
//   this.cities.push(city.name);
//   this.balance -= city.amount;
//   city.persons.push(this);
//   return 'did thing';
// };
