class IndecisionApp extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer!</h2>
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
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
    <div>
      <p>This is the option component</p>
    </div>
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