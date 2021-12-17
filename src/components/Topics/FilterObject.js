import React, { Component } from "react";

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray : [
                {name: "Vanessa", favFood: "shrimp", age: 27 },
                {name: "Edward", eyeColor: "brown", age: 55 },
                {name: "Tendi", favFood: "pasta" },
            ],
            userInput: '',
            filteredArray: [],
        }
        
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    handleClick(prop) {
        let people = this.state.unFilteredArray;
        let newArr = []

        for (let i = 0; people.length; i++) {
            if(people[i].hasOwnProperty(prop)) {
                newArr.push(people[i])
            }
        }

        this.setState({filteredArray: newArr})
    }


  render() {
    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Objects</h4>
            <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
            <input className="inputLine" onChange={(e) => this.state.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.state.handleClick(this.state)}></button>
            <span className="puzzleBox filterObjectRB"> Updated: {JSON.stringify(this.state.filteredArray)}</span>
        </div>
        
        
    )
  }
}

export default FilterObject;
