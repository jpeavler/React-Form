import React from 'react';
import './App.css';
import CreateAccountForm from './components/CreateAccountForm';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateAccountForm/>
        <LoginForm/>
        <ForgotPasswordForm/>
      </header>
    </div>
  );
}

export default App;
