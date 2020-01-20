class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['thing one', 'thing two', 'thing four']
    }
  }
  handleAddOption(addOption) {
    if(!addOption){
      return 'Please insert a non-empty string.'
    } else if (this.state.options.indexOf(addOption) > -1) {
      return 'This option is already in the system.'
    }
    this.setState((prevState)=> {
      return {
        options: prevState.options.concat(addOption)
      }
    })    
  }
  handleDeleteAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick(){
    const index = Math.floor(Math.random() * this.state.options.length)
    console.log(index)
    alert(this.state.options[index])
  }
  render() {

    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer!'
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options} handlePick={this.handlePick}/>
        <Options options={this.state.options}  deleteAll={this.handleDeleteAll}/>
        <AddOption addOption={this.handleAddOption}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={this.props.hasOptions.length === 0}
          onClick={this.props.handlePick}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    return (
      <div>
        <button
          disabled={this.props.options.length == 0} 
          onClick={this.props.deleteAll}>
          Remove All
          </button>
        {
          this.props.options.map(item => <Option key={item} optionText={item} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>{this.props.optionText}</p>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault()
    let option = e.target.elements.option.value.trim()
    const error = this.props.addOption(option)
    this.setState(() => {
      return { error }
    })
    e.target.elements.option.value = ''
 
  }
  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' autoComplete='off'></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))