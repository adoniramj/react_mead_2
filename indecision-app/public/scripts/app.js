"use strict";

console.log("App.js is running!");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "This is JSX!"
  ),
  React.createElement(
    "p",
    null,
    "Hello world"
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
