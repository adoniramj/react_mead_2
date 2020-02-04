console.log('The server is running')

const obj = {
  'title' : 'Indecision App',
  'subtitle' : 'Put your life in the hands of a computer!',
  'options' : ['option one', 'option two']
}

const template = (
  <div>
    <h1>{obj.title}</h1>
    {obj.subtitle && <p>{obj.subtitle}</p>}
    <p>{obj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>{obj.options[0]}</li>
      <li>{obj.options[1]}</li>
    </ol>
  </div>
)

const appRoot = document.getElementById('app')
let count = 0

const addOne = () => {
  count++
  reRender()
}

const minusOne = () => {
  count--
  reRender()
}

const reset = () => {
  count = 0
  reRender()
}


const reRender = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>0</button>
    </div>
  )
  ReactDOM.render(template2, appRoot)
}

reRender()