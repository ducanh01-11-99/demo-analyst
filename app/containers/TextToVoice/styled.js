/**
 * ...
 */

import styled from 'styled-components';
import SvgIconBot from '../../components/svg/IconBot';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background: ${props => props.theme.background.primary};
`;

export const SvgIconBotStyled = styled(SvgIconBot)`
  fill: #7cb305;

  :hover {
    path {
      fill: #000c17;
    }
  }
`;
