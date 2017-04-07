import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import Welcome from './components/Welcome.js'
import About from './components/About.js'

ReactDOM.render(
  (<BrowserRouter>
    <App>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/about' component={About} />
    </App>
  </BrowserRouter>),
  document.getElementById('root')
);

