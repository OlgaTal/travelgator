/* eslint-disable new-cap */

import express from 'express';
// import Country from '../models/country';
import City from '../models/city';
// import Person from '../models/person';

const router = module.exports = express.Router();

router.get('/:id/show', (req, res) => {
  City.findById({ _id: req.params.id }, (err, city) => {
    res.render('city/show', { city });
  });
});

router.get('/new', (req, res) => {
  res.render('city/new');
});

router.post('/new', (req, res) => {
  const name = req.body.name;
  const amount = req.body.amount;
  const photo = req.body.photo;
  const country = req.body.country;
  const code = req.body.code;
  const c1 = new City({ name, amount, photo, country, code });
  c1.save(() => { res.redirect(`/city/${c1.id}/show`); });
});

router.get('/:id/edit', (req, res) => {
  City.findById({ _id: req.params.id }, (err, city) => {
    res.render('/city/edit', city);
  });
});

router.post('/:id/edit', (req, res) => {
  const name = req.body.name;
  const amount = req.body.amount;
  const photo = req.body.photo;
  const country = req.body.country;
  const code = req.body.code;
  City.findByIdAndUpdate({ _id: req.params.id }, {
    name, amount, photo, country, code }, (err, city) => {
      res.redirect(`/city/${city.id}/show`);
    });
});
