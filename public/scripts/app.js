'use strict';

console.log('app.js is running');

//JSX - JavaScript XML


var template = React.createElement(
  'p',
  null,
  'Testing JSX and Babel'
);
// var template = React.createElement("p", null, "This is JSX from app.js");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
