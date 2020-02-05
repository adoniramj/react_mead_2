
const message = 'Click the button to hide me!'

const rootApp = document.getElementById('app')

let visibilityStatus = true

const handleVisibility = () => {
  visibilityStatus = !visibilityStatus
  render()
}
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleVisibility}>{visibilityStatus ? 'Click to hide' : 'Click to unhide'}</button>
      {visibilityStatus && <p>{message}</p>}
    </div>
    )
    ReactDOM.render(template,rootApp)  
}

render()