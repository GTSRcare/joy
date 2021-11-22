import React, { Component } from 'react';
import '../stylesDash.css';
import { getComplimentActionCreator } from '../actions/action';
import { connect } from 'react-redux';


// Map state to props ==>takes the state and gives us access by using this.props
const mapStateToProps = state => ({
  user_id: state.compliments.user_id,
  compliments: state.compliments.complimentsList, 
  randomCompliment: state.compliments.compliment
});

// // Map dispatch to props 
const mapDispatchToProps = dispatch => ({
  grabCompliment: (user, tag) => dispatch(getComplimentActionCreator(user, tag))
});

class Dashmain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const category = document.getElementById('bigButton').value;
    const user_id = this.props.user_id;
    const tag = this.props.tag;
    this.props.grabCompliment(user_id, category);
  }

  render() {
    return (
      <div className="dashContainerBackground">
        
        <div className='spacer'/>
        <div className='dash-container' > 
          <div className= "randomCompliment">{this.props.randomCompliment ? this.props.randomCompliment.message : 'No Compliment'}</div>
          
          <div id="pick">
            <div className="pickCategoryLabel">
            <label className="text2">Pick a Category: </label>
            </div>
            <div className='margin-left-sm'>
              <select id='bigButton' onChange={this.handleChange}>
                <option value='Webpack'>Webpack</option>
                <option value='General'>General</option>
                <option value='Personality'>Personality</option>
                <option value='Redux'>Redux</option>
              </select>
              </div>
          </div>
    
        </div>

        <div className='spacer2'/>
      
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashmain);