import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePassword(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit(event) {
        console.log({
            email: this.state.email,
            password: this.state.password
        })
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Login here</h3>
                <input type="email" placeholder="Email: email@website.com" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name="Email" onChange={this.handleEmail}/>
                <input type="password" placeholder="Password" required
                        pattern=".{8,}" name="Password" onChange={this.handlePassword}/>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}

export default LoginForm;