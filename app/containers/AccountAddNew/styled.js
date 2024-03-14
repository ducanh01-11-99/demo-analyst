/**
 * ...
 */

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background: ${props => props.theme.background.primary};
`;

export { Container };
