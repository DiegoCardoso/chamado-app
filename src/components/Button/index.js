import styled from 'styled-components';
import { grey100, grey700 } from '../../utils/colors';

export const Button = styled.button`
  border: 2px solid ${ props => props.light ? grey100 : grey700};
  color: ${ props => props.light ? grey100 : grey700};
  padding: 10px 30px;
  background-color: transparent;
  font-weight: 500;
  font-size: 1.1em;
  outline: none;
`;

