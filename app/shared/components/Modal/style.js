import styled from 'styled-components';
import { Button, Modal } from 'antd';

const ModalCustom = styled(Modal)`
  .ant-modal-content {
    border: 1px solid #b0bec5;
    border-radius: 16px;
    width: calc(100%);
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-footer {
    padding-top: 16px;
    padding-bottom: 20px;
    border-top: none;
  }

  .ant-modal-close-x {
    cursor: pointer;
  }
`;
const ModalTitle = styled.div`
  height: 45px;
  background: #c5ced9;
  border: 1px solid #c5ced9;
  border-radius: 12px 12px 0 0;
  display: flex;
  position: relative;
  padding: 14px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.14285em;
  line-height: 20px;
  color: #222d4b;
  justify-content: center;
`;
const ButtonFooter = styled(Button)`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 8px;
  color: #ffa13a;
  justify-content: center;

  &.ant-btn:hover,
  &.ant-btn:focus {
    //background-color: #ffa13a !important;
    color: #ffa13a;
  }
  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
  &.ant-btn-primary,
  &.ant-btn {
    border-color: #ffa13a;
    padding: 5px 10px;
  }
`;
export const StyleButtonCloseInfo =
  'background-color: #ffa13a !important; color: #ffffff; &.ant-btn:hover,&.ant-btn:focus{color: #ffffff;}';

const StyleButtonClose = styled(ButtonFooter)`
  ${props => (props.isModalInformation ? StyleButtonCloseInfo : null)}
`;

const ButtonSave = styled(ButtonFooter)`
  background-color: #ffa13a !important;
  color: white;

  &.ant-btn:hover,
  &.ant-btn:focus {
    //background-color: #ffa13a !important;
    color: white;
  }
`;
const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  font-size: 1.07142em;
  line-height: 20px;
  color: #2b2929;
  align-items: center;
`;
export {
  ModalCustom,
  ModalTitle,
  ButtonFooter,
  DivFooter,
  ButtonSave,
  StyleButtonClose,
};
