import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
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

