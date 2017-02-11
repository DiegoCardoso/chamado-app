import styled from 'styled-components';
import { grey600, grey100, grey300 } from '../../utils/colors';

export const Field = styled.div`
  display: flex;
  & + * {
    margin-top: 0.5em;
  }
`;

export const Input = styled.input`
  font-family: Roboto, sans-serif;
  background-color: ${ grey100};
  padding: 10px;
  font-size: 1.1em;
  color: ${ grey600};
  flex: 1;
  border: 2px solid transparent;
  outline: none;

  &:active, &:focus {
    border-color: ${ grey300};
  }

  &::placeholder {
    font-style: italic;
    color: ${ grey300}
  }
`;

export const InputIcon = styled.div`
  background-color: ${ grey300};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default Input;
