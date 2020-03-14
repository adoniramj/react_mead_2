import React from 'react'

const Option = (props) => {
  //console.log('The Option component has the following', props)
  return (
    <div>
      <span>{props.optionText}</span>
      <button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
    </div>
  )
}

export default Option