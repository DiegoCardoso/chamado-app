import React from 'react';

import DashboardComponent from '../../components/Dashboard';

import PrivateRoute from '../PrivateRoute';

class Dashboard extends React.Component {
  render() {
    return (
      <DashboardComponent />
    )
  }
}

export default () => (<PrivateRoute path="/home" component={Dashboard} />)