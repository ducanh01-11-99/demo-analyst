import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelSelect,
  ContainerSelect,
  SelectSearch,
  OptionSearch,
} from './style';
import { RedStart } from '../FloatInput/style';

const FloatSelect = ({
  placeholder,
  value,
  onChange,
  options,
  label,
  defaultValue,
  isRequired,
}) => (
  <ContainerSelect>
    <SelectSearch
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      dropdownMatchSelectWidth={false}
    >
      {options.map(element => (
        <OptionSearch value={element.id}>{element.name}</OptionSearch>
      ))}
    </SelectSearch>
    {label !== undefined ? (
      <LabelSelect>
        {label} {isRequired && <RedStart>*</RedStart>}
      </LabelSelect>
    ) : null}
  </ContainerSelect>
);
FloatSelect.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  isRequired: PropTypes.bool,
};

export default FloatSelect;
