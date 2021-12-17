import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            colors: ['blue', 'grey', 'red', 'yellow']  ,
            userInput: "",
            filteredColors: [],

        }
    }

    handleChange(value) {
        this.setState({userInput: value});
    }

    filterColors(prop) {
        let colors = this.state.colors;
        let filteredColors = [];

        for (let i = 0; i < colors.length; i++) {
            if ( colors[i].includes(prop) ) {
                filteredColors.push(colors[i]);
            }
        }

        this.setState({filteredColors: filteredColors})
    }

    render() { 
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Colors: { JSON.stringify(this.state.colors, null, 10) } </span>
            <input className="inputLine" onChange={(e) => this.state.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.filterColors(this.state.userInput)}></button>
            <span className="resultsBox filterStringRB">Filtered Colors: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
            </div>
        )
    }
}
 
export default FilterString;