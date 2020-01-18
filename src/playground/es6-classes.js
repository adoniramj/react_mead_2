class Person {
  //es6 method definition syntax
  constructor(name = 'Anonymous', age = 0){
    //this refers to the class instance
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `Hi ${this.name}`
  }

  getDescription() {
    return `Hi. My name is ${this.name} and my age is ${this.age} years old.`
  }
}

const me = new Person('Adoniram Vargas', 47)

console.log(me)

const other = new Person()
console.log(other)

console.log(me.getGreeting())
console.log(other.getGreeting())
console.log(me.getDescription())
