import Country from './country';
import City from './city';

const createCountry = function () {
  const country1 = new Country();
  country1.name = 'US';
  country1.save(() => {
    const c1 = new City();
    c1.name = 'Chicago';
    c1.amount = 0;
    c1.photo = '';
    c1.country = country1._id;
    c1.save(() => {
      const c2 = new City();
      c2.name = 'Northbrook';
      c2.amount = 0;
      c2.photo = '';
      c2.country = country1._id;
      c2.save(() => {
        country1.cities.push(c1._id);
        country1.cities.push(c2._id);
        country1.save(() => {
          console.log('country and city saved');
        });
      });
    });
  });
};

module.exports = createCountry;
