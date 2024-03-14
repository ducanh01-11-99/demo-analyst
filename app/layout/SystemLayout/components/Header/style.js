import { Layout, Popover } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const HeaderEtn = styled(Header)`
  height: 50px !important;
  background-color: ${props => props.theme.background.primary} !important;
  width: 100%;
  display: flex;
  z-index: 10;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 20px !important;
  border-bottom: 1px solid #a8a8a8;
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LeftHeader = styled.div`
  width: 60%;
  display: flex;
  align-content: center;
`;

const IconMenu = styled.img`
  display: flex;
  align-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  display: flex;
  align-content: center;
  margin-left: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

const RightHeader = styled.div`
  width: 35%;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

const IconUser = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

const PopoverCustom = styled(Popover)`
  .ant-popover-inner-content {
    padding: 0;
  }
`;

export {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  IconMenu,
  Logo,
  RightHeader,
  IconUser,
  PopoverCustom,
};
