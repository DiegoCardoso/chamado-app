import styled from 'styled-components';

const Panel = styled.div`
  background-color: #FFF;
  padding: 10px 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const PanelHeaderLogin = styled.div`
  background: rgb(235, 239, 243);
  margin: -10px -10px 20px;
  position: relative;

  &::after {
    content: '';
    background: #ebeff3;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: -10px;
    transform: rotate(45deg);
    left: calc(50% - 5px);
  }
`;

export default Panel;