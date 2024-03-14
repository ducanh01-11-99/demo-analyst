import styled from 'styled-components';

export const StyledThemeProvider = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1px;
  line-height: 35px;
`;

export const StyledContentMode = styled.div`
  background: #f9f9fb;
  height: 33px;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 700;
  border: ${props => `1px solid ${props.theme.border.primary}`};
  &:hover {
    border-color: #1890ff;
  }
`;
