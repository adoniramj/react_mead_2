'use strict';

console.log('The server is running');

var obj = {
  'title': 'Indecision App',
  'subtitle': 'Put your life in the hands of a computer!',
  'options': ['option one', 'option two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    obj.title
  ),
  obj.subtitle && React.createElement(
    'p',
    null,
    obj.subtitle
  ),
  React.createElement(
    'p',
    null,
    obj.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      obj.options[0]
    ),
    React.createElement(
      'li',
      null,
      obj.options[1]
    )
  )
);

var appRoot = document.getElementById('app');
var count = 0;

var addOne = function addOne() {
  count++;
  reRender();
};

var minusOne = function minusOne() {
  count--;
  reRender();
};

var reset = function reset() {
  count = 0;
  reRender();
};

var reRender = function reRender() {
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
      '0'
    )
  );
  ReactDOM.render(template2, appRoot);
};

reRender();
