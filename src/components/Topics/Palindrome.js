import React, {Component} from 'react'

class Palindrome extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(value){
    this.setState({userInput: value})
  }

  check(userInput){
    var array = userInput.split('')
    var backwardsArr = []
    var palindrome = 'false';
    for(var i = 0; i < array.length; i++){
      backwardsArr.unshift(array[i])
    }
    if(array.join('') === backwardsArr.join('')){
      palindrome = 'true';
    }
    this.setState({palindrome: palindrome})
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input onChange={(event) => this.handleChange(event.target.value)} className='inputLine'></input>
        <button onClick={() => this.check(this.state.userInput)} className='confirmationButton'>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome