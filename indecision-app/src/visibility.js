
let visible = true

const handleVisibility = () => {
  visible = !visible
  render()
}

const render = () => {
  let template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleVisibility}>{visible ? 'Click to hide' : 'Click to unhide'}</button>
      { visible ? <p>Click the button to hide me</p> : ''}
    </div>
  )
  ReactDOM.render(template, appRoot)

}

const appRoot = document.getElementById('app')

render()