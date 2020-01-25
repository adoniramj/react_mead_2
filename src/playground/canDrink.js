
export const canDrink = (age) => {
  if(age > 21) {
    return 'Can Drink'
  } else {
    return 'Sorry too young!'
  }
}