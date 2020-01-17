console.log('app.js is running')

//JSX - JavaScript XML
var app = {
  title: 'Indecision  App',
  subtitle: 'I am a sub-title',
  options: ['Option one', 'Option two']
}

var template = (
  <div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'Here are your options' : 'You do not have any options'}</p>

  <ol>
  <li>Item 1</li>
  <li>Item 2</li>
  </ol>
  </div>)
  // var template = React.createElement("p", null, "This is JSX from app.js");

let count = 0

const addOne = () => {
  console.log('Add one')
}

const minusOne = () => {
  console.log('Minus one')
}

const equalsZero = () => {
  console.log('Reset to zero')
}
const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>Add one</button>
    <button onClick={minusOne}>Minus one</button>
    <button onClick={equalsZero}>Reset</button>
  </div>
)

console.log(template2)
var appRoot = document.getElementById('app')

ReactDOM.render(template2, appRoot)