import React, { Component } from 'react';
import { Navigate } from 'react-router';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Signup method; make request to backend POST /users/signup
    const optionsObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    };

    // Fetch request
    fetch('/users/signup', optionsObject)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ user_id: response.user_id });
      })
      .catch((err) => {
        console.log(`Signup Form Err: ${err}`);
      });
  }

  render() {
    return this.state.user_id ? (
      <Navigate to='/dashboard' />
    ) : (
      <div className='login'>
        <h2>Sign Up</h2>
        <form className='container'>
          <label className='container' id='field-container'>
            <div id='loginName'>Name</div>
            <input type='text' id='name' />
          </label>

          <label className='container' id='field-container'>
            <div id='loginUsername'>Username</div>
            <input type='text' id='username' />
          </label>

          <label className='container' id='field-container'>
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

// export default Login;
export default Signup;
