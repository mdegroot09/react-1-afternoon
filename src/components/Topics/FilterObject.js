import React, {Component} from 'react'

class FilterObject extends Component{
  constructor(){
    super()

    this.state = {
      unFilteredArray: [
        {name: 'Mike', age: 32, city: 'Lindon'},
        {name: 'Casey', age: 31, home: 'Provo'},
        {name: 'Trisha', spouse: 'Mike', city: 'Alpine'},
        {name: 'Amber', spouse: 'Karl', age: 29, home: 'Scranton'}
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val){
    this.setState({ userInput: val });
  }

  filterArr(prop){
    var unFilteredArray = this.state.unFilteredArray;
    var filteredArray = [];
    for ( var i = 0; i < unFilteredArray.length; i++ ) {
      if ( unFilteredArray[i].hasOwnProperty(prop) ) {
        filteredArray.push(unFilteredArray[i]);
      }
    }
    this.setState({ filteredArray: filteredArray });
  }

  render(){
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.people)}</span>
        <input onChange={(event) => {this.handleChange(event.target.value)}} className='inputLine'></input>
        <button onClick={() => this.filterArr(this.state.userInput)} className='confirmationButton'>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject