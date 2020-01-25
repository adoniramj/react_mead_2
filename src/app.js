//import validator from 'validator'
import React from 'react';
import ReactDOM from 'react-dom'

import { square } from './utils'

const template = (
  <div>
    <p>This is a template! {square(2)}</p>
    <h1>{square(20)}</h1>

  </div>
)

ReactDOM.render(template, document.getElementById('app'))