import { Row } from 'antd';
import styled from 'styled-components';

const RowBreadcrumbStyled = styled(Row)`
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 10px;
  background: ${props => props.theme.background.primary};
`;

export { RowBreadcrumbStyled };
