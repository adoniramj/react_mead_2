console.log("App.js is running!")
var app = {
  title: 'Indecision App',
  sutitle: 'Put your life in the hands of a computer.',
  location: 'New York',
  age: 15
}

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>
  } else {
    return ''
  }
}
var template = ( 
<div>
  { app.title ? <h1>{app.title}</h1> : <h1>Anonymous</h1>}
  <p>{app.sutitle}</p>
  {getLocation(app.location)}
  {app.age > 18 && <p>Age: {app.age}</p>}
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>)
var appRoot = document.getElementById("app")
ReactDOM.render(template, appRoot)