import React, { Component } from "react";

class Signup extends Components{
  constructor(props) {
    super(props);
    this.state={

    }
} 


  render() {
    return (
    <div className="signUp">
      <form>
        <label>Create a Username
          <input type = "text" id='username' />
        </label>

        <label>Create a Password</label>
        <input type='password' id ='password' />
      </form>
      
      <button onClick={(this.handleClick)}>
        Sign up!
      </button>
  
    </div>
    );
  }
}

// export default Login;
export default Signup;

