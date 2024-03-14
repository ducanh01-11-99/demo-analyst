import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Icon } from './style';
import { TOOLTIP_ADD, TOOLTIP_SEARCH } from './constants';

const ButtonFunctionIcon = ({
  onClick,
  type,
  tooltipSearch,
  iconSearch,
  tooltipAdd,
  iconAdd,
}) => {
  const SearchButton = (
    <Tooltip title={tooltipSearch || TOOLTIP_SEARCH}>
      <Icon onClick={() => onClick && onClick()}>
        {iconSearch ? (
          <img width="40px" height="40px" src={iconSearch} alt="" />
        ) : (
          <SearchOutlined width="40px" height="40px" />
        )}
      </Icon>
    </Tooltip>
  );

  const AddButton = (
    <Tooltip title={tooltipAdd || TOOLTIP_ADD}>
      <Icon onClick={() => onClick && onClick()}>
        {iconAdd ? (
          <img width="40px" height="40px" src={iconAdd} alt="" />
        ) : (
          <PlusOutlined />
        )}
      </Icon>
    </Tooltip>
  );

  switch (type) {
    case 'add':
      return AddButton;
    case 'search':
      return SearchButton;
    default:
      return SearchButton;
  }
};
ButtonFunctionIcon.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonFunctionIcon;
