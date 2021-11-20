import React, { Component } from "react";
// import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // Handle click method to handle user login
  handleClick() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const optionsObject = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, 
        password
      })
    };
    
    // // Make POST request to backend /users/login
    // fetch('/users/login', optionsObject)
    //   .then(data => data.json()) // response = { user_id: 4 } 
    //   .then(response => this.setState({ username: response.user_id }))
    //   .catch(err => {
    //     console.log(`Error logging in: ${err}`);
    //   });
  }

  render() {
    //render logic goes here?
    
    return (
      // (this.state.user_id ? <Redirect to='/dashboard' /> : 
      <div className="login">
        <h2 className="silly" >Login Page</h2>
        <form>
          <label>Username
            <input type = "text" id='username' />
          </label>
      
          <label>Password</label>
          <input type='password' id ='password' />
        </form>
        
        <button onClick={(this.handleClick)}>
          login
        </button>
      </div>
    // )
    );
  }
}

export default Login;




/*
create a login buttton 
create a sign up button 

*/
