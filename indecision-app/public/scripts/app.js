'use strict';

var visible = true;

var handleVisibility = function handleVisibility() {
  visible = !visible;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: handleVisibility },
      visible ? 'Click to hide' : 'Click to unhide'
    ),
    visible ? React.createElement(
      'p',
      null,
      'Click the button to hide me'
    ) : ''
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
