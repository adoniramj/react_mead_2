console.log('app.js is running')

//JSX - JavaScript XML
var app = {
  title: 'Indecision  App',
  subtitle: 'I am a sub-title',
  options: ['Option one', 'Option two']
}

const handleSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    console.log('This option is not empty')
    app.options.push(option)
    e.target.elements.option.value = ''
    reRendeFunc()
  }

}

const clearArray = () => {
  app.options = []
  reRendeFunc()
}
var appRoot = document.getElementById('app')


const reRendeFunc = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You do not have any options'}</p>
      <button onClick={clearArray}>Clear options</button>
      <ol>
          {
            app.options.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' name='option' autoComplete='off' />
        <button>Submit</button>
      </form>
    </div>)
  
    ReactDOM.render(template, appRoot)
}

reRendeFunc()