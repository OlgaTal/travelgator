/* eslint-disable func-names */
import mongoose from 'mongoose';
// import City from 'city';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  cities: Array,
});

module.exports = mongoose.model('Country', countrySchema);
