
export const canDrink = (age) => {
  if(age > 21) {
    return 'Can Drink'
  } else {
    return 'Sorry too young!'
  }
}

const isSenior = (age) => {
  if(age >= 65) {
    return 'Senior citizen'
  } else {
    return 'almost there'
  }
}

export default isSenior