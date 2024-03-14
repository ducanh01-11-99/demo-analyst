import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  DivFooter,
  ModalCustom,
  ModalTitle,
  ButtonSave,
  StyleButtonClose,
} from './style';
import { NAME_CANCEL, NAME_SAVE, NAME_SAVE_AND_RESET } from './constants';

const Modal = ({
  title,
  onClickSave,
  isSaveAndReset,
  onClickSaveAndReset,
  onClickCancel,
  isLoading,
  children,
  width,
  nameSave,
  nameSaveAndReset,
  nameCancel,
  disableConfirm,
  isModalInformation,
  buttonFooter,
  isCustomFooter,
}) => {
  const onKeyDownListener = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClickCancel(false);
    }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      onClickSave();
    }
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault();
      onClickSaveAndReset();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownListener);
    return () => {
      document.removeEventListener('keydown', onKeyDownListener);
    };
  });

  return (
    <ModalCustom
      centered
      closable={false}
      maskClosable={false}
      visible
      width={width}
      onCancel={() => {
        onClickCancel(false);
      }}
      footer={[
        <DivFooter>
          {isCustomFooter ? (
            <div>{buttonFooter}</div>
          ) : (
            <DivFooter>
              <StyleButtonClose
                onClick={() => onClickCancel(false)}
                style={{ marginLeft: '10px' }}
                isModalInformation={isModalInformation}
              >
                <div>{nameCancel || NAME_CANCEL}</div>
              </StyleButtonClose>
              {isSaveAndReset && (
                <ButtonSave loading={isLoading} onClick={onClickSaveAndReset}>
                  <div>{nameSaveAndReset || NAME_SAVE_AND_RESET}</div>
                </ButtonSave>
              )}
              {!disableConfirm && (
                <ButtonSave loading={isLoading} onClick={onClickSave}>
                  <div>{nameSave || NAME_SAVE}</div>
                </ButtonSave>
              )}
            </DivFooter>
          )}
        </DivFooter>,
      ]}
    >
      <ModalTitle>{title}</ModalTitle>
      {children}
    </ModalCustom>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClickSave: PropTypes.func,
  onClickCancel: PropTypes.func,
  isSaveAndReset: PropTypes.bool,
  onClickSaveAndReset: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.element,
  width: PropTypes.number,
  nameSave: PropTypes.string,
  nameSaveAndReset: PropTypes.string,
  nameCancel: PropTypes.string,
  disableConfirm: PropTypes.bool,
  isModalInformation: PropTypes.bool,
  buttonFooter: PropTypes.element,
  isCustomFooter: PropTypes.bool,
};
export default Modal;
