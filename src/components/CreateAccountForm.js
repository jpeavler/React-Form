import React from 'react';

class CreateAccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handlePassword =this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    }

    handleFName(event) {
        this.setState({firstname: event.target.value});
    }
    handleLName(event) {
        this.setState({lastname: event.target.value});
    }
    handleAge(event) {
        this.setState({age: event.target.value});
    }
    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePhone(event) {
        this.setState({phone: event.target.value});
    }
    handlePassword(event) {
        this.setState({password: event.target.value});
    }
    handlePasswordConfirm(event) {
        this.setState({passwordconfirm: event.target.value});
    }
    handleSubmit(event) {
        console.log({
            firstname: this.state.firstname, 
            lastname: this.state.lastname,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        });
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Create New Account</h3>
                <input type="text" placeholder="First Name" required onChange={this.handleFName}
                        pattern="[A-Za-z]+" name="First Name"/>
                <input type="text" placeholder="Last Name" required onChange={this.handleLName}
                        pattern="[A-Za-z]+" name="Last Name"/>
                <input type="number" placeholder="Age: Must be 13 or older" required
                        min="13" name="Age" onChange={this.handleAge}/>
                <input type="email" placeholder="Email: email@website.com" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name="Email" onChange={this.handleEmail}/>
                <input type="tel" placeholder="Phone: ***-***-****"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required name="Phone" onChange={this.handlePhone}/>
                <input type="password" placeholder="Password" required
                        pattern=".{8,}" name="Password" onChange={this.handlePassword}/>
                <input type="password" placeholder="Password Confirmation"
                        pattern=".{8,}"required name="Password Confirmation"
                        onChange={this.handlePasswordConfirm}/>
                <input type="submit"/>
            </form>
        );
    }
}

export default CreateAccountForm;