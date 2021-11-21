import React, { Component } from 'react';
import { Navigate } from 'react-router';
import '../styles.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Handle click method to handle user login
  handleClick() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const optionsObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };

    // Make POST request to backend /users/login
    fetch('/users/login', optionsObject)
      .then((data) => data.json()) // response = { user_id: 4 }
      .then((response) => this.setState({ user_id: response.user_id }))
      .catch((err) => {
        console.log(`Error logging in: ${err}`);
      });
  }

  render() {
    //render logic goes here?

    return this.state.user_id ? (
      <Navigate to='/dashboard' />
    ) : (
      <div className='login'>
        <h2>Log In</h2>
        <form class='container'>
          <label class='container' id='field-container'>
            <div id='loginUsername'>Username</div>
            <input type='text' id='username' />
          </label>

          <label class='container' id='field-container'>
            <div id='loginPassword'> Password</div>
            <input type='password' id='password' />
          </label>
        </form>

        <button id='loginButton' onClick={this.handleClick}>
          <div> Submit </div>
        </button>
      </div>
    );
  }
}

export default Login;

/*
create a login buttton 
create a sign up button 

*/
