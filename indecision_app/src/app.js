console.log('The server is running')

const app = {
  'title': 'Indecision App',
  'subtitle': 'Put your life in the hands of a computer!',
  'options': ['option one', 'option two']
}

const onFormSubmit = (event) => {
  event.preventDefault()
  const option = event.target.elements.option.value
  app.options.push(option)
  event.target.elements.option.value = ''
  //const optionList = app.options.map(element => <li key={element}>{element}</li>)
  render()
}

const removeAll = () => {
  app.options = []
  render()
}


const appRoot = document.getElementById('app')
function render () {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={removeAll}>Remove all options</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' autoComplete='off'/>
        <button>Submit</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()

