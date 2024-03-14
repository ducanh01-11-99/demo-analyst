import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

export const Styles = styled(Breadcrumb)`
  font-size: ${props => props.theme.fontSizes.header};
  font-weight: ${props => props.theme.fontWeight.bold};

  .ant-breadcrumb-link a,
  .ant-breadcrumb-separator {
    color: ${props => props.theme.textColor.menuLink};
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.textColor.primary};
`;
export const StyledSpan = styled.span`
  color: ${props => props.theme.textColor.primary};
`;
export const StyledSpanLink = styled.span`
  color: ${props => props.theme.textColor.advanceSearch};
  :hover {
    color: ${props => props.theme.textColor.highlight};
  }
`;
