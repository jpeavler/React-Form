import React from 'react';

function LoginForm() {
    return(
        <form>
            <h3>Login here</h3>
            <input type="text" placeholder="Email" required></input>
            <input type="text" placeholder="Password" required></input>
            <input type="submit" value="Login"></input>
        </form>
    );
}

export default LoginForm;