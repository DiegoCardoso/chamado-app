import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { injectGlobal } from 'styled-components'

import Login from './container/Login';
import Dashboard from './container/Dashboard';
import ListCall from './container/ListCall';


class App extends Component {
  render() {
    (() => injectGlobal`
      body {
        padding: 0;
        margin: 0;
      }
    `)()
    return (
      <Router>
        <div>
          <Route path="/" component={Login} />
          <Dashboard />
          <ListCall />
        </div>
      </Router>
    );
  }
}


export default App;