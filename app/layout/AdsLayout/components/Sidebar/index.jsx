import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { MenuCustom, IconSider, Wrapper } from './styles';

const DotSubItem = () => (
  <span style={{ marginRight: '5px' }}>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#868E96" />
    </svg>
  </span>
);

const Sidebar = ({ permissionArray, dataMenu, onClickMenu, pathname }) => {
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
    <Wrapper>
      <MenuCustom
        mode="horizontal"
        selectedKeys={`${getSelectedKeys()}`}
        items={itemsMenu}
        onClick={e => onClick(e)}
      />
    </Wrapper>
  );
};

Sidebar.propTypes = {
  permissionArray: PropTypes.array,
  dataMenu: PropTypes.array,
  onClickMenu: PropTypes.func,
  pathname: PropTypes.string,
};

export default Sidebar;
