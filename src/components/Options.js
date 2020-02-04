import React from 'react'
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      
      <button
        disabled={props.options.length == 0}
        onClick={props.deleteAll}>
        Remove All
      </button>
      {props.options.length == 0 && <p>There are no options!</p>}
      {
        props.options.map(item => <Option key={item} optionText={item} deleteOption={props.deleteOption} />)
      }
    </div>
  )
}

export default Options