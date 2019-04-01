import React, {Component} from 'react'

class EvenAndOdd extends Component{
  constructor (){
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState(
      {userInput: val}
    )
  }

  assignEvenAndOdds(userInput){
    var array = userInput.split(',')
    var evens = []
    var odds = []
    for (var i = 0; i < array.length; i++){
      if (array[i] % 2 === 0) {
        evens.push(Number(array[i]))
      } else {
        odds.push(Number(array[i]))
      }
    }
    this.setState({evenArray: evens, oddArray: odds})
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={(event) => this.handleChange(event.target.value)} className='inputLine'></input>
        <button onClick={() => {this.assignEvenAndOdds(this.state.userInput)}} className='confirmationButton'>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd