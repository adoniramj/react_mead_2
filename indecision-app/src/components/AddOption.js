import React from 'react'

export default class AddOption extends React.Component {

  state = {
    error: undefined
  }
  
  handleAddOption = (event) => {
    event.preventDefault()
    let option = event.target.elements.option.value.trim()
    let error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))
    if (!error) {
      event.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' autoComplete="off"></input>
          <button type='submit'>Add an option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

