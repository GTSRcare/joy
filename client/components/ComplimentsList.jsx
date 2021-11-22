import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import ComplimentCard from './ComplimentCard.jsx';
import { deleteComplimentActionCreator, patchComplimentActionCreator, getComplimentActionCreator } from '../actions/action.js';

// Map state to props 
const mapStateToProps = state => ({
  complimentsList: state.compliments.complimentsList, 
  user_id: state.compliments.user_id, 
  tagsList: state.compliments.tagsList
});

// Map dispatch to props - delete handler 
const mapDispatchToProps = dispatch => ({
  getCompliments: (user_id) => dispatch(getComplimentActionCreator(user_id)),
  deleteCompliment: (user_id, id) => dispatch(deleteComplimentActionCreator(user_id, id)), 
  updateCompliment: (user, id, category) => dispatch(patchComplimentActionCreator(user, id, category)), 
  grabCompliment: (user_id, category) => dispatch(getComplimentActionCreator(user_id, category))
});

class ComplimentsList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  // Handle change for filter 
  handleChange() {
    const category = document.getElementById('dashCategory-filter').value;
    const user_id = this.props.user_id;
    if (category === 'all') {
      this.props.getCompliments(this.props.user_id);
    }

    else {
      this.props.grabCompliment(user_id, category);
    }
    
  }
  
  componentDidMount() {
    this.props.getCompliments(this.props.user_id);
  }
  
  render() {
    // Generate dropdown categories for filter 
    const options = [];
    for (const currTag of this.props.tagsList) {
      options.push(<option value={currTag} key={currTag}>{currTag}</option>)
    }

    options.push(<option value='all' key='all'>View All</option>)

    // Generate all compliments 
    const allCompliments = [];
    this.props.complimentsList.forEach((compliment) => {
      allCompliments.push(<ComplimentCard key={`${compliment.id + this.props.user_id}`}
        user_id={this.props.user_id}
        id={compliment.id}
        message={compliment.message}
        sender={compliment.sender}
        tag={compliment.tag}
        date={compliment.date}
        deleteCompliment={this.props.deleteCompliment}
        updateCompliment={this.props.updateCompliment}
        tagsList={this.props.tagsList}
      />)
    })

    return (
      <>
        <NavBar />
        <div className='margin-left-auto'>
          <label htmlFor='dashCategory-filter'>Filter: </label>
          <select id='dashCategory-filter' name='dashCategory-filter' onChange={this.handleChange}>
            {options}
          </select>
        </div>
        {allCompliments}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplimentsList);
