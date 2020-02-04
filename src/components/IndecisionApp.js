import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }

    } catch (e) {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      let json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }

  }

  handleAddOption(addOption) {
    if (!addOption) {
      return 'Please insert a non-empty string.'
    } else if (this.state.options.indexOf(addOption) > -1) {
      return 'This option is already in the system.'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(addOption) }))
  }
  handleDeleteAll() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(option) {
    let newArray = this.state.options.filter(item => {
      return item != option
    })

    this.setState(() => ({ options: newArray }))
  }
  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length)
    console.log(index)
    alert(this.state.options[index])
  }
  render() {
    const subtitle = 'Test the subtitle'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          deleteAll={this.handleDeleteAll}
          deleteOption={this.handleDeleteOption}
        />
        <AddOption addOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}


export default IndecisionApp