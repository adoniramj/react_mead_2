class Visibility extends React.Component {
  constructor(props){
    super(props)
    this.handleVisibility = this.handleVisibility.bind(this)
    this.state = {
      visibility: true
    }
  }

  handleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.handleVisibility}>{this.state.visibility ? 'Click to hide' : 'Click to unhide'}</button>
        {this.state.visibility && <p>Click the button to hide me!</p>}
      </div>
    )
  }
}

const rootApp = document.getElementById('app')

ReactDOM.render(<Visibility />, rootApp)