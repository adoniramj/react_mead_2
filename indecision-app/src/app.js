class IndecisionApp extends React.Component {


  render () {
    const app = {
      title: 'Indecision App!',
      subtitle: 'Put your life in the hands of a computer!',
      options: ['Option one', 'Option two', 'Option four']
    }
    
    return (
      <div>
        <Header data={app}/>
        <Action />
        <Options options={app.options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <h2>{this.props.data.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick () {
    alert('Action')
  }

  render () {
    return ( 
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('Remove all')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all options</button>
        {this.props.options.map( option => <Option key={option} optionText={option} />)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p >{this.props.optionText}</p>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(event) {
    event.preventDefault()
    const option = event.target.elements.option.value.trim()
    if(option) {
      alert(option)
    }
    event.target.elements.option.value = ''
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' autoComplete="off"></input>
          <button type='submit'>Add an option</button>
        </form>
      </div>
    )
  }
}
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)