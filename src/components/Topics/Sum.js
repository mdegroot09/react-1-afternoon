import React, {Component} from 'react'

class Sum extends Component {
  constructor(){
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  num1Change(value){
    this.setState({number1: Number(value)})
  }
  
  num2Change(value){
    this.setState({number2: Number(value)})
  }

  findSum(num1, num2){
    this.setState({sum: num1+num2})
  }

  render(){
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input onChange={(event) => this.num1Change(event.target.value)} type='number' className='inputLine'></input>
        <input onChange={(event) => this.num2Change(event.target.value)} type='number' className='inputLine'></input>
        <button onClick={() => {this.findSum(this.state.number1, this.state.number2)}} className='confirmationButton'>Add</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum