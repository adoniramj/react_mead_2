class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      title: 'Counter Application',
      count: props.count
    }
  }

  handleAddOne() {
    this.setState((prevState) => { //the arrow function is called an updater function
      return { //prevState is the state object before being updated
        count: prevState.count + 1
      }
    })

  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render () {
    
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleAddOne}>Add one</button>
        <button onClick={this.handleMinusOne}>Minus one</button>
        <button onClick={this.handleReset}>Reset counter</button>
        <button onClick={this.printCount}>Count</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 10
}
const appRoot = document.getElementById('app')
ReactDOM.render(<Counter count={40}/>, appRoot)