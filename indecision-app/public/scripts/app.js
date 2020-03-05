'use strict';

console.log("App.js is running!");
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: ['one', 'two']
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
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? 'Here are your options' : 'There a no options',
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

var count = 0;

var addOne = function addOne() {
  console.log('add one', count);
  count++;
  render();
};
var minusOne = function minusOne() {
  console.log('minus one');
  count--;
  render();
};
var reset = function reset() {
  console.log('reset');
  count = 0;
  render();
};

var appRoot = document.getElementById("app");

function render() {
  var templateTwo = React.createElement(
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
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
}

render();
