import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }
    render() { 
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return ( 
            <fieldset>
                <legend>
                    Enter currently {scaleNames[scale]} Temperature.
                </legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
         );
    }
}

class Calculator1 extends React.Component {
    render() { 
        return ( 
            <div>
                <Temperature scale="c" />
                <Temperature scale="f" />
            </div>
         );
    }
}
 
export default Calculator1;