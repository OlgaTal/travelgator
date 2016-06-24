/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
import City from '../models/city';
import Person from '../models/person';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('person/index', { personListView: Person.find() });
});

router.get('/new', (req, res) => {
  res.render('person/new');
});

router.get('/:id/view', (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    const personView = new PersonView(person);
    // person.cities[0].populate()
  });
  res.render('person/show', { person: Person.findOne(req.params.id) });
});
// to-do post save
