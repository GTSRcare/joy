//If the user clicks on the button with the route to generate a compliment

import React, { Component } from 'react';

class ComplimentsForm extends Component {
  render() {
    return (
      <div>
        <h2>Compliments Form</h2>
        <input type='text' id='sender' />
        <form> className=ComplimentsForm</form>
        <label>Pick a Compliment Category:</label>
        <select id='Category' name='Category'>
          <option value='Webpack'>Webpack</option>
          <option value='General'>General</option>
          <option value='Personality'>Personality</option>
          <option value='Redux'>Redux</option>
          <option value='webpack'>webpack</option>
        </select>
        <input type='text' id='message' />
        <button id='createCompliment' onClick={this.handleClick}>
          <div> Create a Compliment </div>
        </button>
      </div>
    );
  }
}
export default ComplimentsForm;

/*
in the form we want 

cateogry ==> drop down style: think i got the drop down right- unsure
sender
message

tags: personality 


{ category: XYZ, sender: XYZ, message: XYZ }

Webpack
General
Personality
Redux
webpack


need to add a button to submit 


https://www.w3schools.com/html/html_form_elements.asp

*/
