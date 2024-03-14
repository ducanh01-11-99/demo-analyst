import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ContainerSider, MenuCustom, SiderCustom, IconSider } from './styles';

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

  const onClick = e => {
    onClickMenu(e.key);
  };

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

  return (
    <ContainerSider clickMenu={isExpand}>
      <SiderCustom
        width={maxWidth}
        collapsedWidth={collapsedWidth}
        theme="light"
        trigger={null}
        collapsible
        collapsed={!expand}
        // onMouseEnter={() => setCollapsedWidth(maxWidth)}
        // onMouseLeave={() => setCollapsedWidth(isExpand ? maxWidth : minWidth)}
        onMouseEnter={() => setExpand(isExpand ? expand : !expand)}
        onMouseLeave={() => setExpand(isExpand ? expand : false)}
      >
        <MenuCustom
          mode="inline"
          selectedKeys={`${getSelectedKeys()}`}
          items={itemsMenu}
          onClick={e => onClick(e)}
        />
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
};

export default Sidebar;
