import React, { Component } from 'react';
import '../stylesDash.css';
import { getComplimentActionCreator } from '../actions/action';
import { connect } from 'react-redux';


// Map state to props ==>takes the state and gives us access by using this.props
const mapStateToProps = state => ({
  user_id: state.compliments.user_id,
  compliments: state.compliments.complimentsList
});

// // Map dispatch to props 
const mapDispatchToProps = dispatch => ({

  grabCompliment: (user, tag) => dispatch(getComplimentActionCreator(user, tag))
});

class Dashmain extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    
    const category = document.getElementById('dashCategory').value;

    // Dispatch action creator 
    console.log('this\.props\.compliments:', this.props.compliments)
    console.log('category:', category)
    // user, category, sender ,message 
    const user_id = this.props.user_id;
    const tag = this.props.tag;
    this.props.grabCompliment(user_id, category);
  }

  render() {
    let random = Math.floor(Math.random() * this.props.compliments.length);
    let list = this.props.compliments[random].message;
    
    return (
      <div>
        <div className='spacer'/>
        <div className='dash-container' > 
          <div>{list}</div>
          <div id="pick">
            <label className="text">Pick a Category:</label>
            <select id='dashCategory' name='dashCategory'>
              <option value='Webpack'>Webpack</option>
              <option value='General'>General</option>
              <option value='Personality'>Personality</option>
              <option value='Redux'>Redux</option>
            </select>
          </div>
        </div>
        <button id='grabComplimentButton' onClick={this.handleSubmit}>
            <div> Find a Compliment! </div>
        </button>
        <div className='spacer2'/>
      </div>
    );
  }
}

//  export default Dashmain;
export default connect(mapStateToProps, mapDispatchToProps)(Dashmain);
//GET_COMPLIMENT

//payload: response.data.complimentsList,