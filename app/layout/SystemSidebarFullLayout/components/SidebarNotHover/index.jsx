import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  ContainerSider,
  MenuCustom,
  SiderCustom,
  IconSider,
  TopSidebar,
} from './styles';
import { IconMenu, Logo } from '../Header/style';
import iconMenuDefault from '../../../../images/icons/iconMenu.svg';
import iconLogoDefault from '../../../../images/temp_logo.png';

const DotSubItem = () => (
  <span>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#868E96" />
    </svg>
  </span>
);

const Sidebar = ({
  isExpand,
  minWidth,
  maxWidth,
  permissionArray,
  dataMenu,
  onClickMenu,
  pathname,
  onClickLogoMenu,
  onClickLogo,
  iconMenu,
  logo,
}) => {
  const [collapsedWidth, setCollapsedWidth] = useState(minWidth);
  const [expand, setExpand] = useState(isExpand);

  useEffect(() => {
    setCollapsedWidth(isExpand ? maxWidth : minWidth);
    setExpand(isExpand);
  }, [isExpand]);

  // eslint-disable-next-line consistent-return
  const itemsMenu = _.flatMap(dataMenu, itemMenu => {
    if (permissionArray) {
      if (permissionArray.includes(itemMenu.key)) {
        if (itemMenu.child) {
          const filteredChildren = itemMenu.child.filter(childItem =>
            permissionArray.includes(childItem.key),
          );
          if (filteredChildren.length > 0) {
            return {
              label: itemMenu.label,
              key: itemMenu.path,
              icon: <IconSider src={itemMenu.icon} />,
              children: filteredChildren.map(childItem => ({
                label: (
                  <>
                    <DotSubItem />
                    {childItem.label}
                  </>
                ),
                key: childItem.path,
              })),
            };
          }
        } else {
          return {
            label: itemMenu.label,
            key: itemMenu.path,
            icon: <IconSider src={itemMenu.icon} />,
          };
        }
      }
    } else {
      return {
        label: itemMenu.label,
        key: itemMenu.path,
        icon: <IconSider src={itemMenu.icon} />,
        children: itemMenu.child
          ? itemMenu.child.map(childItem => ({
              label: (
                <>
                  <DotSubItem />
                  {childItem.label}
                </>
              ),
              key: childItem.path,
            }))
          : [],
      };
    }
  });

  const getSelectedKeys = () => {
    if (pathname !== undefined) {
      if (_.filter(dataMenu, i => i.path === pathname).length !== 0) {
        return _.filter(dataMenu, i => i.path === pathname)[0].key;
      }
      const menuHaveChilds = _.filter(dataMenu, i => i.child !== undefined);
      if (menuHaveChilds.length !== 0) {
        // eslint-disable-next-line no-plusplus
        for (let x = 0; x < menuHaveChilds.length; x++) {
          if (
            menuHaveChilds[x].child !== undefined &&
            _.filter(menuHaveChilds[x].child, i => i.path === pathname)
              .length !== 0
          ) {
            return _.filter(
              menuHaveChilds[x].child,
              i => i.path === pathname,
            )[0].key;
          }
        }
      }
    }
    return 1;
  };
  const onClick = e => {
    onClickMenu(e.key);
  };

  return (
    <ContainerSider clickMenu={isExpand}>
      <SiderCustom
        width={maxWidth}
        collapsedWidth={collapsedWidth}
        theme="light"
        trigger={null}
        collapsible
        collapsed={!expand}
      >
        <div>
          <TopSidebar>
            <IconMenu
              alt=""
              onClick={() => {
                onClickLogoMenu();
              }}
              src={iconMenu || iconMenuDefault}
            />
            <Logo
              alt=""
              onClick={onClickLogo || null}
              src={logo || iconLogoDefault}
            />
          </TopSidebar>
          <MenuCustom
            mode="inline"
            selectedKeys={`${getSelectedKeys()}`}
            items={itemsMenu}
            onClick={onClick}
          />
        </div>
      </SiderCustom>
    </ContainerSider>
  );
};

Sidebar.propTypes = {
  isExpand: PropTypes.bool,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  permissionArray: PropTypes.array,
  dataMenu: PropTypes.array,
  onClickMenu: PropTypes.func,
  pathname: PropTypes.string,
  onClickLogoMenu: PropTypes.any,
  onClickLogo: PropTypes.any,
  iconMenu: PropTypes.any,
  logo: PropTypes.any,
};

export default Sidebar;
