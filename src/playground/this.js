function foo() {
  console.log(this.bar)
}

const obj1 = {
  bar: 'obj1',
  foo() {
    console.log(this.bar)
  }
}

const fooo = obj1.foo.bind(obj1)

fooo()