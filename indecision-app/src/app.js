console.log("App.js is running!")
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: ['one', 'two', 'three']
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  } else {
    return ''
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value
  if (option) {
    app.options.push(option)
    render()
  }
  event.target.elements.option.value = ''
}

const handleReset = () => {
  app.options = []
  render()
}

const pickOption = () => {
  let opt = Math.floor(Math.random() * app.options.length)
  alert(app.options[opt])

}
var appRoot = document.getElementById("app")

const render = () => {
  var template = (
    <div>
      {app.title ? <h1>{app.title}</h1> : <h1>Anonymous</h1>}
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>Here are your options</p> : <p>There are no options!</p>}
      <button disabled={app.options.length === 0} onClick={pickOption}>Pick on option</button>
      <button onClick={handleReset}>Clear all options</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option" autoComplete="off"></input>
        <button type="submit">Add option</button>
      </form>
    </div>)
  ReactDOM.render(template, appRoot)
}


render()

