import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";

// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
document.getElementById("root")
);



/*
we want the provider to give us the redux store to be able to
apply and import anything we want from redux and other components

we need to render this functionality to the entire app
we do this by putting it in the render

https://react-redux.js.org/api/provider

https://www.youtube.com/watch?v=NmH1Sr6jYyM

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);




render(<App />, document.getElementById("root"));
*/
