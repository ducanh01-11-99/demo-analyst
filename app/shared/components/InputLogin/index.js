import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { DivFloatLabel, InputText, InputPassword, LabelNormal } from './styles';

const InputLogin = ({
  label,
  defaultValue,
  type,
  error,
  onChange,
  onEnter,
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const isOccupied = focus || (value && value.length !== 0);

  setTimeout(() => {
    const autofilled = document.querySelectorAll('input:-webkit-autofill');
    if (autofilled.length > 0) setFocus(true);
  }, 500);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <DivFloatLabel
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {type === 'password' ? (
        <InputPassword
          onKeyPress={handleKeyPress}
          onChange={e => setValue(e.target.value)}
          type={type}
          defaultValue={defaultValue}
          placeholder={label}
          style={{
            borderRadius: '8px',
          }}
          status={error ? 'error' : null}
          iconRender={visible =>
            visible ? (
              <div>
                <Tooltip mouseLeaveDelay={0} title="Ẩn mật khẩu">
                  <EyeTwoTone />
                </Tooltip>
              </div>
            ) : (
              <div>
                <Tooltip mouseLeaveDelay={0} title="Hiển thị mật khẩu">
                  <EyeInvisibleOutlined />
                </Tooltip>
              </div>
            )
          }
        />
      ) : (
        <InputText
          onChange={e => setValue(e.target.value)}
          type={type}
          defaultValue={defaultValue}
          placeholder={label}
          style={{
            borderRadius: '8px',
          }}
          status={error ? 'error' : null}
        />
      )}
      {isOccupied ? <LabelNormal> {label}</LabelNormal> : null}
    </DivFloatLabel>
  );
};

InputLogin.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
};

export default InputLogin;
