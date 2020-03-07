'use strict';

console.log("App.js is running!");
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: ['one', 'two', 'three']
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

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    render();
  }
  event.target.elements.option.value = '';
};

var handleReset = function handleReset() {
  app.options = [];
  render();
};
var appRoot = document.getElementById("app");

var numbers = [10, 20, 30];
var render = function render() {
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
    app.options.length > 0 ? React.createElement(
      'p',
      null,
      'Here are your options'
    ) : React.createElement(
      'p',
      null,
      'There are no options!'
    ),
    React.createElement(
      'button',
      { onClick: handleReset },
      'Clear all options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
