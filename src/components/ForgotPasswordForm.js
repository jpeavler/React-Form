import React from 'react';

class ForgotPasswordForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleEmail(event){
        this.setState({email: this.state.value});
    }
    handleSubmit(event){
        console.log({
            email: this.state.email,
        })
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Fogot Password? Request New Password Here</h3>
                <input type="email" placeholder="Email: email@website.com" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name="Email" onChange={this.handleEmail}/>
                <input type="submit" value="Change Password"/>
            </form>
        );
    }
}

export default ForgotPasswordForm;