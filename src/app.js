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
      localStorage.setItem('test', json)
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
      {props.options.length == 0 && <p>There are no options!</p>}
      {
        props.options.map(item => <Option key={item} optionText={item} deleteOption={props.deleteOption} />)
      }
    </div>
  )
}

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
    this.setState(() => ({ error }))
    if(!error){
      e.target.elements.option.value = ''
    }
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