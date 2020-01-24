class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }

  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
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

  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>Add one</button>
        <button onClick={this.handleMinusOne}>Minus one</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }


  componentDidMount(){
      try {
        let json = localStorage.getItem('count')
        console.log(json)
        let count = JSON.parse(json)
        this.setState(() => ({count}))
      }
      catch (e) {
      }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count != this.state.count){
      let count = JSON.stringify(this.state.count)
      console.log(count)
      localStorage.setItem('count', count)
    }

  }
}

// Counter.defaultProps = {
//   counter: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))