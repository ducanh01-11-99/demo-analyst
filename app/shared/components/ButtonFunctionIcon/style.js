import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  img {
    padding: 0;
  }
  :hover {
    border-radius: 20px;
    filter: drop-shadow(0px 0px 3px #000);
  }
`;

export { Icon };
