console.log("App.js is running!")
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: ['one', 'two']
}

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>
  } else {
    return ''
  }
}
var template = ( 
<div>
  { app.title ? <h1>{app.title}</h1> : <h1>Anonymous</h1>}
  {app.subtitle && <p>{app.subtitle}</p>}
  {app.options.length > 0 ? 'Here are your options' : 'There a no options'}
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>)

let count = 0

const addOne = () => {
  console.log('add one', count)
  count++;
  render()
}
const minusOne = () => {
  console.log('minus one')
  count--;
  render()
}
const reset = () => {
  console.log('reset')
  count = 0
  render()
}

var appRoot = document.getElementById("app")

function render () {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot)
}

render()
