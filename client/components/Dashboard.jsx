// Main dashboard after logging in
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
    };
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Dashboard;
