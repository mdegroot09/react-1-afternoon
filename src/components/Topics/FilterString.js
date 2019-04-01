import React, {Component} from 'react';

class FilterString extends Component {
  constructor(){
    super()

    this.state = {
      unFilteredArray: [
        'hello', 'goodbye', 'how are you'
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(value){
    this.setState({userInput: value})
  }

  addFilter(userInput){
    let unFilteredArray = this.state.unFilteredArray
    let filtered = []
    for(var i = 0; i < unFilteredArray.length; i++){
      if(unFilteredArray[i].includes(userInput)){
        filtered.push(unFilteredArray[i])
      }
    }
    this.setState({filteredArray: filtered})
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Greetings: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input onChange={(event) => this.handleChange(event.target.value)} className='inputLine'></input>
        <button onClick={() => {this.addFilter(this.state.userInput)}} className='confirmationButton'>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString