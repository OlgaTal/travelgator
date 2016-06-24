/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
// import City from '../models/city';
// import Person from '../models/person';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Country.find({}, (err, countries) => {
    res.render('country/index', { countries });
  });
});

router.get('/:id/view', (req, res) => {
  Country.findById({ _id: req.params.id }, (err, country) => {
    res.render('country/show', { country });
  });
});

router.get('/new', (req, res) => {
  res.render('country/new');
});

router.post('/new', (req, res) => {
  const country = new Country({ name: req.body.name });
  console.log(req.body.name);
  country.save(() => {
    res.redirect('/country');
  });
});

router.get('/:id/edit', (req, res) => {
  Country.findById({ _id: req.params.id }, (err, country) => {
    res.render('country/edit', { country });
  });
});

router.post('/:id/edit', (req, res) => {
  const name = req.body.name;
  const cities = req.body.cities;
  Country.findByIdAndUpdate({ _id: req.params.id }, { name, cities }, () => {
    res.redirect(`/country/${req.params.id}/view`);
  });
});
