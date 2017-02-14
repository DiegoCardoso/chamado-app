import React, { Component } from 'react';

import Container from '../Container';
import MenuBar from '../MenuBar';
import AppHeader from '../AppHeader';

class ListCall extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <MenuBar />
      </Container>
    );
  }
}

export default ListCall;