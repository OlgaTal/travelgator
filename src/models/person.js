import City from 'city';
function Person() {
  this.name = '';
  this.age = 0;
  this.gender = '';
  this.balance = 0;
  this.cities = [];
  this.photo = '';
}

Person.find = function() {
  const p1 = new Person();
  p1._id = '1';
  p1.name = 'A';
  p1.photo = 'http://image.shutterstock.com/z/stock-photo-a-portrait-of-a-very-old-man-years-old-near-his-house-55351525.jpg';
  p1.age = 100;
  p1.gender = 'Male';
  p1.balance = 10000;

  const p2 = new Person();
  p2._id = '2';
  p2.name = 'B';
  p2.photo = 'https://pixabay.com/static/uploads/photo/2015/09/18/11/38/old-woman-945448_960_720.jpg';
  p2.age = 150;
  p2.gender = 'Female';
  p2.balance = 1000;

  const arr = [];
  arr.push(p1);
  arr.push(p2);

  return arr;
};

Person.findOne = function(id) {
  const p1 = new Person();
  p1._id = '1';
  p1.name = 'A';
  p1.photo = 'http://image.shutterstock.com/z/stock-photo-a-portrait-of-a-very-old-man-years-old-near-his-house-55351525.jpg';
  p1.age = 100;
  p1.gender = 'Male';
  p1.balance = 10000;


  const arr = [];
  arr.push('c1');
  arr.push('c2');

  return p1;
};

module.exports = Person;
