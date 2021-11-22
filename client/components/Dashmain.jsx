import React, { Component } from 'react';
import '../stylesDash.css';
class Dashmain extends Component {

  render() {
    return (
      <div>
        <div className='spacer'/>
        <div className='dash-container' > 
          <h3 className='general-compliment'>You are awesome! Keep it up!</h3>
          <h3 className='select' >Select from ADD DROPDOWN !!! dropdown</h3>
        </div>
        <div className='spacer2'/>
      </div>
    );
  }
}

export default Dashmain;