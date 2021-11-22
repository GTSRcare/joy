//If the user clicks on the button with the route to generate a compliment

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComplimentActionCreator } from '../actions/action';
import NavBar from './NavBar.jsx';
import '../stylesCCC.css';

// Map state to props
const mapStateToProps = state => ({
  user_id: state.compliments.user_id
});

// Map dispatch to props 
const mapDispatchToProps = dispatch => ({
  createCompliment: (user, category, sender, message) => dispatch(postComplimentActionCreator(user, category, sender, message))
});

class ComplimentsForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle form submit to create new compliment
  handleSubmit() {
    const sender = document.getElementById('sender').value;
    const message = document.getElementById('message').value;
    const category = document.getElementById('category').value;

    // Dispatch action creator 
    console.log('submitted')
    // user, category, sender ,message 
    const user_id = this.props.user_id;
    this.props.createCompliment(user_id, category, sender, message);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="cccContainer">
          
          <h2 className="text">Compliments Form</h2>
          
          <form className='ComplimentsForm'> 
          <div className="senderDiv">
            <label className="text" >Sender:  </label>
            <input type='text' id='sender' />
          </div>
          <div id="pick">
            <label className="text">Pick a Category:</label>
            <select id='category' name='category'>
              <option value='Webpack'>Webpack</option>
              <option value='General'>General</option>
              <option value='Personality'>Personality</option>
              <option value='Redux'>Redux</option>
              <option value='webpack'>webpack</option>
            </select>
          </div>
          <div>
            <label className="text">Message:</label>
            <input type='text' id='message' />
          </div>
          <button id='createComplimentButton' onClick={this.handleSubmit}>
            <div> Create a Compliment </div>
          </button>

          </form>
         
        
        </div >
      </div>
    );
  }
}
// export default ComplimentsForm;
export default connect(mapStateToProps, mapDispatchToProps)(ComplimentsForm);

