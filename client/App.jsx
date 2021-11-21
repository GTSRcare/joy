import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Dashboard from "./components/Dashboard.jsx";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    )
  }
}

export default App;



/*

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


<Switch>
                <Route exact path='/add' component={AddFormContainer} />
                <Route exact path='/' component={LoginComponent} />
            </Switch>



*/

