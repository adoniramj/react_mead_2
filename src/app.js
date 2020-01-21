class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: props.options
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
    const subtitle = 'Test the subtitle'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options} handlePick={this.handlePick}/>
        <Options options={this.state.options}  deleteAll={this.handleDeleteAll}/>
        <AddOption addOption={this.handleAddOption}/>
      </div>
    )
  }
}

// IndecisionApp.defaultProps = {
//   options: ['Option one']
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'default name'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={props.hasOptions.length === 0}
        onClick={props.handlePick}
      >
       What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button
        disabled={props.options.length == 0}
        onClick={props.deleteAll}>
        Remove All
      </button>
      {
        props.options.map(item => <Option key={item} optionText={item} />)
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <p>{props.optionText}</p>
  )
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

ReactDOM.render(<IndecisionApp options={['option 2', 'maybe']}/>, document.getElementById('app'))