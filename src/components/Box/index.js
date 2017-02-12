import styled from 'styled-components';


const Box = styled.div`
  display: flex;
  justify-content: ${ props => {
    if (props.right) return 'flex-end';
    if (props.center) return 'center';
    return 'flex-start';
  }}
`;


export default Box;