import React from 'react';
import styled, { keyframes } from 'styled-components';

const Overflow = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-size: 5em;
  color: #FFF;
`;

const pulse = keyframes`
  50% { 
    background: #FFF;
  } 
`;


const Bars = styled.div`
  position: relative;
  width: calc(24px / 4);
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${pulse} 750ms infinite;
  animation-delay: calc(750ms / 3);
  &:before, &:after {
    content: '';
    position: absolute;
    display: block;
    height: calc(24px / 1.5);
    width: calc(24px / 4);
    background: rgba(255, 255, 255, 0.2);
    top: 50%;
    transform: translateY(-50%);
    animation: ${pulse} 750ms infinite;
  }
  &:before {
    left: calc(-24px / 2);
  }
  &:after {
    left: calc(24px / 2);
    animation-delay: calc(750ms / 1.5);
  }
`;

class Loading extends React.Component {

  render() {
    return (
      <Overflow>
        <Bars />
      </Overflow>
    )
  }
}

export default Loading;