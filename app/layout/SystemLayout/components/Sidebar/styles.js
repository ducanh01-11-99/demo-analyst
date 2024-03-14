import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const ContainerSider = styled.div`
  padding-top: 46px;
  height: 100%;
  width: ${props => (props.clickMenu ? 'auto' : '64px')};

  div {
    height: 100%;
  }
`;

const SiderCustom = styled(Sider)`
  z-index: 9;
  height: 100%;

  .ant-layout-sider-children {
    padding-top: 4px;
  }
`;

const MenuCustom = styled(Menu)`
  height: 100%;
  background-color: ${props => props.theme.background.third} !important;
  li.ant-menu-item {
    padding: 0 !important;
    margin: 10px 12px;
    border-radius: 8px;
    width: auto;
    display: flex;
  }

  .ant-menu-sub.ant-menu-inline {
    background-color: ${props => props.theme.background.third} !important;
  }

  li.ant-menu-item::after {
    border: none !important;
  }

  li.ant-menu-item:hover {
    background: ${props => props.theme.background.second} !important;
  }

  li.ant-menu-item.ant-menu-item-selected {
    background: ${props => props.theme.background.second} !important;
  }

  li.ant-menu-item.ant-menu-item-selected > span.ant-menu-title-content {
    font-weight: 600 !important;
  }

  span.ant-menu-title-content {
    opacity: 1 !important;
    font-size: 1.28571em;
    font-weight: 400;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0 24px !important;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    width: auto;
    padding: 0 !important;
    margin: 10px 12px 0;
    border-radius: 8px;

    :hover {
      background: ${props => props.theme.background.second} !important;
    }
  }

  .ant-menu-submenu-title {
    display: flex;
  }

  .ant-menu-submenu-arrow {
    position: unset;
    margin-right: 8px;
  }

  .ant-menu-title-content {
    display: flex;
  }

  .ant-menu-title-content span {
    display: flex;
    margin-right: 8px;
    align-items: center;
  }

  li.ant-menu-submenu.ant-menu-submenu-vertical.ant-menu-submenu-selected
    .ant-menu-submenu-title {
    background: rgb(207, 216, 220);
  }

  li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected
    .ant-menu-submenu-title
    span {
    font-weight: bold;
  }
`;

const IconSider = styled.img`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  min-width: auto !important;
`;

export { ContainerSider, MenuCustom, SiderCustom, IconSider };
