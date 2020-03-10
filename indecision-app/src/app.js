class IndecisionApp extends React.Component {

  constructor(props){
    super(props)
    this.resetOptions = this.resetOptions.bind(this)
    this.addOption = this.addOption.bind(this)
    this.state = {
      subtitle: 'Put your life in the hands of a computer!',
      options: props.options
    }
  }

  resetOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  addOption(newOption) {
    if(!newOption) {
      return 'Empty strings are not allowed!'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists!'
    }
    this.setState((prevState) => {
      return {
        options : prevState.options.concat(newOption)
      }
    })
  }
  render () {

    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action options={this.state.options}/>
        <Options options={this.state.options} reset={this.resetOptions}/>
        <AddOption addOption={this.addOption}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['Option one']
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
  title: 'Indecision App'
}

const Action = (props) => {
  console.log('The Action component has the following', props)

  const handlePick =  () => {
    let ranNum = Math.floor(Math.random()*props.options.length)
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
  console.log('The Options component has the following', props)
  return (
    <div>
      <button 
        disabled={props.options.length === 0} 
        onClick={props.reset}
      >
        Remove all options
      </button>
      {props.options.map( option => <Option key={option} optionText={option} />)}
    </div>
  )
}

const Option = (props) => {
  console.log('The Option component has the following', props)
  return (
    <p >{props.optionText}</p>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(event) {
    event.preventDefault()
    let option = event.target.elements.option.value.trim()
    let error = this.props.addOption(option)
    this.setState(() => {
      return { error }
    })
    
    event.target.elements.option.value = ''
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' autoComplete="off"></input>
          <button type='submit'>Add an option</button>
        </form>
        {this.state.error && <p>{ this.state.error }</p>}
      </div>
    )
  }
}
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp options={['ten', 'twenty']} />, appRoot)