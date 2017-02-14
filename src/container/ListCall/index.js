import React, { Component } from 'react';

import PrivateRoute from '../PrivateRoute';
import ListCallComponent from '../../components/ListCall';

class ListCall extends Component {
  render() {
    return (
      <ListCallComponent />
    );
  }
}

export default () => <PrivateRoute to="/list-call" component={ListCall} />