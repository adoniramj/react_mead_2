import React from 'react';
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
  constructor() {
    this.name = 'Adoniramm'
  }
}

const oldSyntax = new OldSyntax()

console.log(oldSyntax)

// Using new syntax

class NewSyntax {
  name = 'Josue'
}

const newSyntax = new NewSyntax()
console.log(newSyntax)
