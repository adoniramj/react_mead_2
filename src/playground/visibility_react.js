class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.handleVisible = this.handleVisible.bind(this)
    this.state = {
      visible: true
    }
  }

  handleVisible() {
    this.setState((prevState)=> {
      return {
        visible: !prevState.visible
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.handleVisible}>
        {
          this.state.visible === true ? 'Click to hide' : 'Click to unhide'
        }
        </button>
        {
          this.state.visible ? <p>Click to hide me</p> : null
        }
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))