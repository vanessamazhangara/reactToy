import React, {Component} from 'react';



class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    isPalindrome() {
    let forwards = this.state.userInput;
    let backwards = this.state.userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }


    render() { 
        return (
    <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
    </div>
        )
    }
}
 
export default Palindrome;