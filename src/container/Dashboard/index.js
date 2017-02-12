import React from 'react';

import PrivateRoute from '../PrivateRoute';

class Dashboad extends React.Component {
  render() {
    return (
      <h1>
        Dashboard
      </h1>
    )
  }
}

export default () => (<PrivateRoute path="/dashboard" component={Dashboad} />)