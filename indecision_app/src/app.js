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
ReactDOM.render(template, appRoot)