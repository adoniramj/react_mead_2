import React from 'react'

import Option from './Option'

const Options = (props) => {
  //console.log('The Options component has the following', props)
  return (
    <div>
      <button
        disabled={props.options.length === 0}
        onClick={props.handleDeleteAllOptions}
      >
        Remove all options
      </button>
      {
        props.options.map(option => {
          return <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        })
      }
    </div>
  )
}

export default Options

