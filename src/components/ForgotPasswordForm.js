import React from 'react';

function ForgotPasswordForm() {
    return(
        <form>
            <h3>Fogot Password? Request New Password Here</h3>
            <input type="text" placeholder="Email" required></input>
            <input type="submit" value="Change Password"></input>
        </form>
    );
}

export default ForgotPasswordForm;