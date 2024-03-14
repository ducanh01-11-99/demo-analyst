import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { Button, ImgIconAdd } from './style';

const ButtonFunction = ({
  onClick,
  title,
  tooltip,
  icon,
  backgroundColor,
  textColor,
}) => (
  <Tooltip title={tooltip || title}>
    <Button
      onClick={() => !onClick || onClick()}
      background={backgroundColor}
      color={textColor}
    >
      {icon ? <ImgIconAdd src={icon} alt="" /> : null}
      {title}
    </Button>
  </Tooltip>
);

ButtonFunction.propTypes = {
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default ButtonFunction;
