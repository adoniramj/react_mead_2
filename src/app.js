class IndecisionApp extends React.Component {
  render() {

    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer!'
    const options = ['thing one', 'thing two', 'thing four']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  handlePick() {
    alert('Handle pick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('Remove all button clicked')
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault()
    let option = e.target.elements.option.value.trim()
    if(option){
      alert(option)
      e.target.elements.option.value = ''

    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' autoComplete='off'></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))