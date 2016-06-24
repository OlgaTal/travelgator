/* eslint-disable new-cap */
import express from 'express';
// import Country from '../models/country';
// import City from '../models/city';
import Person from '../models/person';
import PersonView from '../models/personView';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Person.find((err, people) => {
    // console.log('PEOPLE:', people);
    res.render('person/index', { personList: people });
  });
});

router.get('/new', (req, res) => {
  res.render('person/new');
});

router.get('/:id/view', (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    const personView = new PersonView(person);
    console.log('view person:', personView);
    // person.cities[0].populate()
    res.render('person/show', { person: personView });
  });
});
// to-do post save
router.post('/add', (req, res) => {
  const person = new Person(req.body);
  console.log('person:', person);
  person.save(() => {
    res.redirect(`/person/${person.id}/view`);
  });
});
router.get('/:id/edit', (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    console.log('view person:', person);
    // person.cities[0].populate()
    res.render('person/edit', { person });
  });
});
