// Main dashboard after logging in
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Dashmain from './Dashmain.jsx';
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
        <Dashmain />
      </div>
    );
  }
}

export default Dashboard;
