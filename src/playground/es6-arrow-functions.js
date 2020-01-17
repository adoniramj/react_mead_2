const square = function (x) {
  return x*x
}

const cube = (x) => {
  return x**3
}
console.log(square(16))
console.log(cube(3))

const squaretwo = (x) => x*x

console.log(squaretwo(8))

const name = 'Adoniram Vargas'
//expression syntax
const lastName = (input) => input.split(' ')[1]

console.log(lastName(name))
//verbose syntax
const firstName = (input) => {
  return input.split(' ')[0]
}

console.log(firstName(name))

//argument objects are bound in ES5 funcitons.

const add = function (a, b) {
  console.log(arguments)
  return a + b
}
console.log(add(1,3,1001))

const addArrow = (a,b) => {
  //console.log(arguments)
  return a + b
}

console.log(addArrow(5,6))

const user = {
  name: 'Adoniram',
  cities: ['Miami', 'Yokosuka'],
  printPlacesLived: function() {
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(function (city) {
      //If you uncomment the line below it will produce an error
      console.log(this.name + ' has lived in ' + city)
    }),

    this.cities.forEach((city) => {
      console.log(this.name + ' has live in ' + city)
    })
  },
  printPlacesLived2: () => {
    this.cities.forEach(city => {
      console.log(this.name+ ' has live in ' + city)
    })
  }
}

user.printPlacesLived()

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 5,
  multiply() {
  return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())