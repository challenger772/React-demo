import React, { PureComponent } from 'react'

class Form extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          value: ''  
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        alert('this name is submitted: '  + this.state.value);
       
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='lift'>lift</option>
                        <option value='liftdc'>liftdc</option>
                        <option>liftzsq</option>
                        <option>liftce</option>
                        <option>lifcet</option>

                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default Form