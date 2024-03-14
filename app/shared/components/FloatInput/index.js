import PropTypes from 'prop-types';
import React from 'react';
import { DivFloatLabel, InputText, LabelNormal, RedStart } from './style';

const InputCustom = React.forwardRef((props, ref) => (
  <DivFloatLabel>
    <InputText {...props} ref={ref} style={{ borderRadius: '8px' }}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </InputText>
    <LabelNormal>
      {props.label} {props.isRequired && <RedStart>*</RedStart>}
    </LabelNormal>
  </DivFloatLabel>
));

InputCustom.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default InputCustom;
