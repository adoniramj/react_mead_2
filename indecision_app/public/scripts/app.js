'use strict';

var message = 'Click the button to hide me!';

var rootApp = document.getElementById('app');

var visibilityStatus = true;

var handleVisibility = function handleVisibility() {
  visibilityStatus = !visibilityStatus;
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
      visibilityStatus ? 'Click to hide' : 'Click to unhide'
    ),
    visibilityStatus && React.createElement(
      'p',
      null,
      message
    )
  );
  ReactDOM.render(template, rootApp);
};

render();
