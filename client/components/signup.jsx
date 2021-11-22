import React, { Component } from 'react';
import { Navigate } from 'react-router';
import { signUpActionCreator } from '../actions/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// mapStateToProps 
const mapStateToProps = state => ({
  user_id: state.compliments.user_id
})

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  submitSignup: (name, username, password) => dispatch(signUpActionCreator(name, username, password))
});


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

    // // Signup method; make request to backend POST /users/signup
    this.props.submitSignup(name, username, password)
  }

  render() {
    return this.props.user_id ? (
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
          <div> Sign Up </div>
        </button>

        <Link to='/' className='signup-link'>Log In</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
