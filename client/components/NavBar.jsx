import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>GTSR</Link>
        <Link to='/view'>View All</Link>
        <Link to='/add'>Create</Link>
      </nav>
    );
  }
}
export default NavBar;
