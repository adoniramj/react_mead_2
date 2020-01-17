'use strict';

console.log('app.js is running');

//JSX - JavaScript XML
var app = {
  title: 'Indecision  App',
  subtitle: 'I am a sub-title',
  options: ['Option one', 'Option two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'You do not have any options'
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
// var template = React.createElement("p", null, "This is JSX from app.js");

var count = 0;

var addOne = function addOne() {
  console.log('Add one');
};

var minusOne = function minusOne() {
  console.log('Minus one');
};

var equalsZero = function equalsZero() {
  console.log('Reset to zero');
};
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    'Add one'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    'Minus one'
  ),
  React.createElement(
    'button',
    { onClick: equalsZero },
    'Reset'
  )
);

console.log(template2);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
