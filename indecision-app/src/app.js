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
  render () {
    return ( 
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>This is options component</p>
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
  render () {
    return (
      <div>
        <form>
          <input type='text' name='option'></input>
          <button type='submit'>Add an option</button>
        </form>
      </div>
    )
  }
}
const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)