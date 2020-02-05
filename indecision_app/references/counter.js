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