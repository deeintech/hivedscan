import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/styles/argon.css';
import '../assets/styles/app.css';
import { BrowserRouter as Router } from "react-router-dom";

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}
render();