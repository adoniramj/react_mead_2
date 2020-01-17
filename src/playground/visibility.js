let visible = true

const makeVisible = () => {
  visible = !visible
  render()
}

const appRoot = document.getElementById('app')

const render = () => {
  const visibility = (
    <div>
      <h1>Visibility app</h1>
      <button onClick={makeVisible}>
      { 
        visible ? 'Click to Hide' : 'Click to unhide'
      }
      </button>
      {
        visible ? <p>Click the button to hide me</p> : null
      }
      </div>
    )
  ReactDOM.render(visibility, appRoot)
}

render()