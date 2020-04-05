import React, { PureComponent } from 'react'

class Multiple extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target.value;
        const value = target.value === this.isGoing ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    isGoing:
                    <input 
                        name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    number of guests:
                    <input 
                        name='numberOfGuests'
                        type='number'
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}

export default Multiple