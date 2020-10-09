import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/styles/argon.css';
import '../assets/styles/app.css';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()