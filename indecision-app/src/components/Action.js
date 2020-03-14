import React from 'react'

const Action = (props) => {
  //console.log('The Action component has the following', props)

  const handlePick = () => {
    let ranNum = Math.floor(Math.random() * props.options.length)
    alert(props.options[ranNum])
  }

  return (
    <div>
      <button
        disabled={props.options.length === 0}
        onClick={handlePick}>
        What should I do?
      </button>
    </div>
  )
}

export default Action