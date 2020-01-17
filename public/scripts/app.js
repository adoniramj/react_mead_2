'use strict';

console.log('app.js is running');

//JSX - JavaScript XML
var app = {
  title: 'Indecision  App',
  subtitle: 'I am a sub-title',
  options: []
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    console.log('This option is not empty');
    app.options.push(option);
    e.target.elements.option.value = '';
    reRendeFunc();
  }
};

var clearArray = function clearArray() {
  app.options = [];
  reRendeFunc();
};
var appRoot = document.getElementById('app');

var reRendeFunc = function reRendeFunc() {
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
    app.options.length > 0 && React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: clearArray },
      'Clear options'
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
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
      React.createElement(
        'button',
        null,
        'Submit'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

reRendeFunc();
