import React from 'react';
import styled from 'styled-components';

import { grey700 } from '../../utils/colors';
import logo from '../../images/logo.svg';

const Header = styled.header`
  background-color: #FFF;
  border-bottom: 2px solid ${ grey700};
  padding: 0.5em;
  margin: -10px;
  margin-bottom: 10px;
`;

export default () => (
  <Header>
    <img src={logo} width="200px" role="presentation" />
  </Header>
)