import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

import homeIcon from '../../images/home.svg';
import gearsIcon from '../../images/gears.svg';
import callIcon from '../../images/call.svg';
import membersIcon from '../../images/members.svg';

import { grey200, red, purple } from '../../utils/colors';

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #FFF;
  border-top: 1px solid ${ grey200};
  display: flex;
`;

const IconContainer = styled.svg`
  fill: currentColor;
`;

const Icon = ({ file, id }) => (
  <IconContainer viewBox="0 0 354 354" width="20">
    <use xlinkHref={`${file}#${id}`} />
  </IconContainer>
)

const StyledLink = styled(Link)

const NavItemLink = StyledLink`
  padding: 0.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${ ({ selected }) => selected ? '#FFF' : grey200};
  font-family: Roboto, sans-serif;
  font-size: 0.8em;
  text-decoration: none;
  background: ${ props => props.selected ? `linear-gradient(to right, ${purple}, ${red})` : '#FFF'};
  & + * {
    border-left: 1px solid ${ grey200};
  }

  > * + * {
    margin-top: 2px;
  }
`;

const NavItem = ({ to, children }) => (
  <Route path={to} children={({ match }) => (
    <NavItemLink to={to} selected={match}>
      {children}
    </NavItemLink>
  )} />
)



export default () => (
  <NavBar>
    <NavItem to="/home">
      <Icon file={homeIcon} id="Home-Icon" />
      <span>
        Início
      </span>
    </NavItem>
    <NavItem to="/list-call">
      <Icon file={callIcon} id="Call-Icon" />
      <span>
        Chamada
      </span>
    </NavItem>
    <NavItem to="/members">
      <Icon file={membersIcon} id="Users-Icon" />
      <span>
        Alunos
      </span>
    </NavItem>
    <NavItem to="/settings">
      <Icon file={gearsIcon} id="Settings-Icon" />
      <span>
        Ajustes
      </span>
    </NavItem>
  </NavBar>
)