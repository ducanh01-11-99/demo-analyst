import styled from 'styled-components';
import { Select } from 'antd';

const LabelSelect = styled.label`
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: -11px;
  transition: 0.2s ease all;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 22px;
  z-index: 2;
  color: #212529;
`;

const ContainerSelect = styled.div`
  width: 100%;
  position: relative;
  height: 40px;
  label:after {
    content: ' ';
    display: block;
    position: absolute;
    background: white;
    height: 4px;
    top: 50%;
    left: -0.1em;
    right: -0.2em;
    z-index: -1;
  }
`;

const SelectSearch = styled(Select)`
  width: 100%;
  height: 40px;
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
    color: #212529;
  }
  .ant-select-selection-item {
    line-height: 40px !important;
  }

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 8px;
  }

  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: #212529;
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none;
  }
`;

const OptionSearch = styled(Option)`
  height: 40px;
  margin-left: 30px;
  color: #212529;

  :hover {
    background-color: rgba(33, 37, 41, 0.3);
  }
`;

const RedStart = styled.span`
  margin-left: -1px;
  color: #dd281f;
`;

export { LabelSelect, ContainerSelect, SelectSearch, OptionSearch, RedStart };
