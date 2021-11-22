import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import ComplimentCard from './ComplimentCard.jsx';
import { deleteComplimentActionCreator, patchComplimentActionCreator } from '../actions/action.js';

// Map state to props 
const mapStateToProps = state => ({
    // [ { id: X, message: X, sender: X, category_id: x, date: X, tag: X } ]
  complimentsList: state.compliments.complimentsList, 
  user_id: state.compliments.user_id, 
  tagsList: state.compliments.tagsList
});

// Map dispatch to props - delete handler 
const mapDispatchToProps = dispatch => ({
  deleteCompliment: (user_id, id) => dispatch(deleteComplimentActionCreator(user_id, id)), 
  updateCompliment: (user, id, category) => dispatch(patchComplimentActionCreator(user, id, category))
});

class ComplimentsList extends Component {
  render() {
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
        {allCompliments}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplimentsList);
