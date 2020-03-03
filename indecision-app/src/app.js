console.log("App.js is running!")

var template = ( 
<div>
  <h1>This is JSX!</h1>
  <p>Hello world</p>
</div>)
var appRoot = document.getElementById("app")
ReactDOM.render(template, appRoot)