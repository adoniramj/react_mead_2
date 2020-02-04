import React from 'react'

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={() => props.deleteOption(props.optionText)}
      >Remove option
      </button>
    </div>
  )
}

export default Option
