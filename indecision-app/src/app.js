class IndecisionApp extends React.Component {

  constructor(props) {
    super(props)
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      subtitle: 'Put your life in the hands of a computer!',
      options: props.options
    }
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

  handleDeleteAllOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    //console.log('delete option', option)
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(option => {
          return option !== optionToRemove
        })
      }
    })
  }

  handleAddOption(newOption) {
    if (!newOption) {
      return 'Empty strings are not allowed!'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists!'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
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
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision App!'
}

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

const Option = (props) => {
  //console.log('The Option component has the following', props)
  return (
    <div>
      <span>{props.optionText}</span>
      <button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
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

  handleAddOption(event) {
    event.preventDefault()
    let option = event.target.elements.option.value.trim()
    let error = this.props.handleAddOption(option)
    this.setState(() => ({ error }))
    if(!error){
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
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp options={['ten', 'twenty']} />, appRoot)
//ReactDOM.render(<IndecisionApp />, appRoot)