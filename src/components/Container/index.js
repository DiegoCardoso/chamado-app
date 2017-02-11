import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh
  position: absolute
  top: 0
  left: 0
  right: 0
  margin: 0
  padding: 10px
  background-color: ${props => props.dark ? 'rgb(55, 67, 85)' : 'rgb(235, 239, 243)'}
`;

export default Container;