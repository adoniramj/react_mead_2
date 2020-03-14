import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

export default class IndecisionApp extends React.Component {
  state = {
    subtitle: 'Put your life in the hands of a computer!',
    options: []
  }
 
    handleDeleteAllOptions = () => {
    this.setState(() => ({ options: [] }))
  }
    handleDeleteOption = (optionToRemove) => {
    //console.log('delete option', option)
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(option => {
          return option !== optionToRemove
        })
      }
    })
  }
   handleAddOption = (newOption) => {
    if (!newOption) {
      return 'Empty strings are not allowed!'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists!'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
  }
  
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      console.log(options)
      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      //do not update state if json is not valid.
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  render() {
    
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action options={this.state.options} />
        <Options
          options={this.state.options}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['test']
}

