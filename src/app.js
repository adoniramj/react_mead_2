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

  function getLocation (location) {
    if (location) {
      return <p>Location: {location}</p>
    }
  }
  var user = {
    age: 17,
    location: 'Miami'
}
var userName = 'Mike'
var userAge = 50

var template2 = (
  <div>
    <p>Name: {user.name ? user.name : 'anonymous'}</p>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)