import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="Selected option"
  >
    <h3>Selected option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.clearSelectedOption}>Close modal</button>
  </Modal>
)

export default OptionModal