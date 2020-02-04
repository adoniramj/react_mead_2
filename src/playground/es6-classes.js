class Person {
  //This is not a function body
  //es6 method definition syntax
  constructor(name = 'Anonymous', age = 0) {
    //this refers to the class instance
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `Hi. I am ${this.name}.`
  }

  getDescription() {
    return `Hi. My name is ${this.name} and my age is ${this.age} years old.`
  }
}

class Student extends Person {
  //tweaking the constructor function
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }
    return description
  }

}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age)
    this.location = location
  }

  hasLocation() {
    return !!this.location
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if(this.hasLocation()) {
      greeting += ` And I live in ${this.location}.`
    }
    return greeting
  }
}

const me = new Traveler('Adoniram Vargas', 47, 'Miami')

console.log(me.getGreeting())

const other = new Traveler('John Doe')

console.log(other.getGreeting())

