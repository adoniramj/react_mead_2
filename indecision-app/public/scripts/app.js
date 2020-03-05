'use strict';

console.log("App.js is running!");
var app = {
  title: 'Indecision App',
  sutitle: 'Put your life in the hands of a computer.',
  location: 'New York',
  age: 15
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return '';
  }
}
var template = React.createElement(
  'div',
  null,
  app.title ? React.createElement(
    'h1',
    null,
    app.title
  ) : React.createElement(
    'h1',
    null,
    'Anonymous'
  ),
  React.createElement(
    'p',
    null,
    app.sutitle
  ),
  getLocation(app.location),
  app.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    app.age
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
