import React from 'react';

function CreateAccountForm() {
    return(
        <form>
            <h3>Create New Account</h3>
            <input type="text" placeholder="First Name" required
                    pattern="[A-Za-z]+"></input>
            <input type="text" placeholder="Last Name" required
                    pattern="[A-Za-z]+"></input>
            <input type="number" placeholder="Age: Must be 13 or older" required
                    min="13"></input>
            <input type="email" placeholder="Email: email@website.com" required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
            <input type="tel" placeholder="Phone: ***-***-****"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required></input>
            <input type="password" placeholder="Password" required
                    pattern=".{8,}"></input>
            <input type="password" placeholder="Password Confirmation"
                    pattern=".{8,}"required></input>
            <input type="submit"></input>
        </form>
    );
}

export default CreateAccountForm;