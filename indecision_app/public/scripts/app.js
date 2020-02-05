'use strict';

console.log('The server is running');

var app = {
  'title': 'Indecision App',
  'subtitle': 'Put your life in the hands of a computer!',
  'options': ['option one', 'option two']
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;
  app.options.push(option);
  event.target.elements.option.value = '';
  //const optionList = app.options.map(element => <li key={element}>{element}</li>)
  render();
};
var onMakeDecision = function onMakeDecision() {
  var number = Math.floor(Math.random() * app.options.length);
  alert(app.options[number]);
};
var removeAll = function removeAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');
function render() {
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
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { onClick: onMakeDecision, disabled: app.options.length === 0 ? true : false },
      'What should I do?'
    ),
    React.createElement('br', null),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove all options'
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
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
      React.createElement(
        'button',
        null,
        'Submit'
      )
    )
  );

  ReactDOM.render(template, appRoot);
}

render();
