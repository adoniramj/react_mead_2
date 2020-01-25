console.log('utils.js is running')

const square = (x) => x * x
const cube = (x) => x ** 3

const isAdult = (age) => {
  if(age >= 18) {
    return true
  } else {
    return false
  }
}

export const add = (a, b) => a + b

export { square, cube, isAdult }