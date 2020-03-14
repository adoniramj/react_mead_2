import React from 'react'
import Option from './Option'

const Options = (props) => (
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

export default Options

