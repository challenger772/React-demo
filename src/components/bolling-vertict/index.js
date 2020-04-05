import React, { Component } from 'react'

function BoilingVertict(props) {
    if(props.celsius > 100) {
        return <p>Water would boil.</p>
    }
    return <p>Water would not boil.</p>
}

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temperature: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter currently temperature.</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVertict 
                    celsius={parseFloat(temperature)}
                />
            </fieldset>
        )
    }
}

export default Calculator