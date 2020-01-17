'use strict';

var visible = true;

var makeVisible = function makeVisible() {
  visible = !visible;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var visibility = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility app'
    ),
    React.createElement(
      'button',
      { onClick: makeVisible },
      visible ? 'Click to Hide' : 'Click to unhide'
    ),
    visible ? React.createElement(
      'p',
      null,
      'Click the button to hide me'
    ) : null
  );
  ReactDOM.render(visibility, appRoot);
};

render();
