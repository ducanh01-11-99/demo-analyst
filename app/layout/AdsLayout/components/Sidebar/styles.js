import styled from 'styled-components';
import { Menu } from 'antd';

const Wrapper = styled.div`
  width: 100%;
`;
const MenuCustom = styled(Menu)`
  background-color: transparent !important;
  height: 35px !important;
  border-bottom: unset !important;

  li.ant-menu-item {
    padding: 0 !important;
    margin: 10px 12px;
    border-radius: 8px;
    width: auto;
    display: flex;
  }

  .ant-menu-sub.ant-menu-submenu-horizontal {
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
    display: flex;
    margin: 0px 8px 0px 2px;
    align-items: center;
    color: ${props => props.theme.textColor.primary} !important;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    //padding: 0 24px !important;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    width: auto;
    padding: 0 !important;
    border-radius: 8px;

    :hover {
      background: ${props => props.theme.background.second} !important;
    }
  }

  .ant-menu-submenu-title {
    display: flex;
    height: 35px;
  }

  .ant-menu-submenu-arrow {
    position: unset;
    margin-right: 8px;
  }

  // back ground item dc chon
  //li.ant-menu-submenu.ant-menu-submenu-horizontal.ant-menu-submenu-selected
  //  .ant-menu-submenu-title {
  //  background: rgb(207, 216, 220);
  //}
  li.ant-menu-submenu-horizontal {
    padding: 0px 10px 0px 10px !important;
  }

  li.ant-menu-submenu.ant-menu-submenu-horizontal.ant-menu-submenu-selected
    .ant-menu-submenu-title {
    span {
      font-weight: bold;
    }
  }
`;

const IconSider = styled.img`
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 8px;
  min-width: auto !important;
`;

export { MenuCustom, IconSider, Wrapper };
