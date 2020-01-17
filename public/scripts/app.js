'use strict';

var square = function square(x) {
  return x * x;
};

var cube = function cube(x) {
  return Math.pow(x, 3);
};
console.log(square(16));
console.log(cube(3));

var squaretwo = function squaretwo(x) {
  return x * x;
};

console.log(squaretwo(8));

var name = 'Adoniram Vargas';
//expression syntax
var lastName = function lastName(input) {
  return input.split(' ')[1];
};

console.log(lastName(name));
//verbose syntax
var firstName = function firstName(input) {
  return input.split(' ')[0];
};

console.log(firstName(name));

//argument objects are bound in ES5 funcitons.

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(1, 3, 1001));

var addArrow = function addArrow(a, b) {
  //console.log(arguments)
  return a + b;
};

console.log(addArrow(5, 6));

var user = {
  name: 'Adoniram',
  cities: ['Miami', 'Yokosuka'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {
      //If you uncomment the line below it will produce an error
      console.log(this.name + ' has lived in ' + city);
    }), this.cities.forEach(function (city) {
      console.log(_this.name + ' has live in ' + city);
    });
  },
  printPlacesLived2: function printPlacesLived2() {
    undefined.cities.forEach(function (city) {
      console.log(undefined.name + ' has live in ' + city);
    });
  }
};

user.printPlacesLived();

var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
