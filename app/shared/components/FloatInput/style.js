import styled from 'styled-components';
import { Input } from 'antd';

const DivFloatLabel = styled.div`
  position: relative;
  color: #212529;
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

const InputText = styled(Input)`
  height: 40px;
  width: 100%;

  &.ant-input {
    outline: none;
    padding-left: 10px;
    font-size: 1em;
    font-style: normal;
    color: #212529;
    box-sizing: border-box;
  }

  &.ant-input:focus,
  &.ant-input-focused {
    box-shadow: none;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #383838;
  }
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 11px;
  transition: 0.2s ease all;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
`;

const LabelNormal = styled(Label)`
  z-index: 2;
  top: -8px;
  padding: 0 4px;
  margin-left: -4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #212529;
`;

const RedStart = styled.span`
  margin-left: -1px;
  color: #dd281f;
`;

export { DivFloatLabel, InputText, LabelNormal, RedStart };
