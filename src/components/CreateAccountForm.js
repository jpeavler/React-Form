import React from 'react';

class CreateAccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {
        const target = event.target;
        const name = target.name;
        console.log(name + ': ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.value}>
                <h3>Create New Account</h3>
                <input type="text" placeholder="First Name" required
                        pattern="[A-Za-z]+" name="First Name"></input>
                <input type="text" placeholder="Last Name" required
                        pattern="[A-Za-z]+" name="Last Name"></input>
                <input type="number" placeholder="Age: Must be 13 or older" required
                        min="13" name="Age"></input>
                <input type="email" placeholder="Email: email@website.com" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name="Email"></input>
                <input type="tel" placeholder="Phone: ***-***-****"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required name="Phone"></input>
                <input type="password" placeholder="Password" required
                        pattern=".{8,}" name="Password"></input>
                <input type="password" placeholder="Password Confirmation"
                        pattern=".{8,}"required name="Password Confirmation"></input>
                <input type="submit"></input>
            </form>
        );
    }
}

export default CreateAccountForm;