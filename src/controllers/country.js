/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
import City from '../models/city';
import Person from '../models/person';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('country/index');
});

// router.get('/about', (req, res) => {
//   res.render('home/about');
// });
//
// router.get('/faq', (req, res) => {
//   res.render('home/faq');
// });
