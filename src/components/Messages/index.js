import styled from 'styled-components';

import { grey600, red } from '../../utils/colors';

export const Message = styled.div`
  font-family: Roboto, sans-serif;
  background-color: transparent;
  border: 2px solid ${grey600};
  color: ${grey600};
  font-weight: 500;
  padding: 10px 20px;
  margin: 10px 0; 
`;

export const ErrorMessage = styled(Message) `
  border-color: ${red};
  color: ${red};
`;