import React, { Component } from 'react';

class ComplimentCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          editMode: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  // Handle edit 
  handleEdit() {
    this.setState({ editMode: true })
  }

  handleSubmit() {
    console.log('submit');
    const newCategory = document.getElementById('tag').value;
    // send user, id 
    const { user_id, id } = this.props;
    this.props.updateCompliment(user_id, id, newCategory);
    this.setState({ editMode: false });
  }


  render() {
    const { user_id, id, message, sender, tag, date, deleteCompliment, tagsList } = this.props;
    const options = [];
  
    for (const currTag of tagsList) {
      if (currTag === tag) {
        options.push(<option value={currTag} selected='selected'>{currTag}</option>)
      } else {
        options.push(<option value={currTag}>{currTag}</option>)
      }
    }
    return (
        <div>
          <span>{date}</span>
            <span>{message}</span>
            <span>{sender}</span>

            {!this.state.editMode ? <span>{tag}</span> : 
            <form>
              <select id='tag' name='tag'>
                {options}
              </select>
            </form>
            }

            {!this.state.editMode ? <button onClick={this.handleEdit}>Edit Item</button> : 
              <button onClick={() => this.handleSubmit()}>Submit</button>
            }

            <button onClick={() => deleteCompliment(user_id, id)}>Delete Item</button>

        </div>
    )
  }
}

export default ComplimentCard;

