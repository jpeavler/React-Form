import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CreateAccountForm from './components/CreateAccountForm';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <header className="App-header">
          <nav>
                <Link class="App-link" to="/">Login</Link>
                <Link class="App-link" to="/create">Create Account</Link>
                <Link class="App-link" to="/forgotpassword">Forgot Password?</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/create">
            <CreateAccountForm />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPasswordForm />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}


export default App;
