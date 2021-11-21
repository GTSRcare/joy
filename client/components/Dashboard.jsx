// Main dashboard after logging in
import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null
    }
} 

  render() {
    return (
    <div className="dashBoard">
      <h2>Hello Dashboard</h2>
    </div>
    );
  }
}

// export default Login;
export default Dashboard;
