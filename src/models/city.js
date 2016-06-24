/* eslint-disable func-names */

import mongoose from 'mongoose';
// import City from 'city';
// import Person from 'person';

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  amount: Number,
  photo: String,
  country: mongoose.Schema.ObjectId,
  persons: [{ type: mongoose.Schema.ObjectId, ref: 'Person' }],
  code: String,
});

module.exports = mongoose.model('City', citySchema);
