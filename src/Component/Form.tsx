import React, {ChangeEvent, Component} from 'react';

class Form extends Component {
    state = {
        firstName: '',
    };


    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {firstName} = this.state;
        return (
            <div>
                <h1>Form</h1>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                />

            </div>
        )
    }
}

export default Form;