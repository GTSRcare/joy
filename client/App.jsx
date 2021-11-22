import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import ComplimentsList from './components/ComplimentsList.jsx';
import ComplimentsForm from './components/ComplimentsForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/view' element={<ComplimentsList />} />
        <Route path='/add' element={<ComplimentsForm />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<signUpButton />} />
      </Routes>
    );
  }
}

export default App;

/*

<Link to=‘/signup’> Sign Up </Link>



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
