import React, { Component } from 'react';

class EvenAndOdd extends Component {
    
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }
    
    
    handleChange(value) {
        this.setState({userInput: value })
    }

    assignEvenAndOdds (userInput) {
        let arr = userInput.split(',');
        let odd = [];
        let even = [];
    
        for (let i = 0; arr.length; i++) {
            if(arr[i] % 2 === 1) {
                odd.push(parseInt(arr[i], 10))
            } else {
                even.push(parseInt(arr[i], 10))
            }
        }
    }

    render() { 
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even And Odds</h4>
                <input  className="inputLine" onChange={(e) => this.state.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.assignEvenAndOdds(this.state.userInput)}></button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox">Odd: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }

    updateInput() {

    }
}
 
export default EvenAndOdd;