/**
 * ...
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet/es/Helmet';
import { Container } from '../../common.styles';
import * as actions from '../App/actions';

const AccountManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleNotifySuccess = () => {
    dispatch(actions.notifySuccess('handleNotifySuccess'));
  };
  const handleNotifyFail = () => {
    dispatch(actions.notifyFail('handleNotifyFail'));
  };
  const handleNotifyInfo = () => {
    dispatch(actions.notifyInfo('handleNotifyInfo'));
  };
  const handleNotifyWarning = () => {
    dispatch(actions.notifyWarning('handleNotifyWarning'));
  };

  const handleMessageWarning = () => {
    dispatch(actions.messageWarning('handleMessageWarning'));
  };
  const handleMessageOpen = () => {
    dispatch(actions.messageOpen('handleMessageOpen'));
  };
  const handleMessageError = () => {
    dispatch(actions.messageFail('handleMessageError'));
  };
  const handleMessageSuccess = () => {
    dispatch(actions.messageSuccess('handleMessageSuccess'));
  };
  const handleMessageLoading = () => {
    dispatch(actions.messageLoading('handleMessageLoading'));
  };
  const handleMessageInfo = () => {
    dispatch(actions.messageInfo('handleMessageInfo'));
  };
  return (
    <>
      <Container>
        <Helmet title={t('common.accountManagement')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>
          <div>{t('common.accountManagement')}</div>
          <div>
            <Button
              onClick={() =>
                navigate('/category/account-manage/add-new-account')
              }
            >
              Add new
            </Button>
            <Button
              onClick={() => navigate('/category/account-manage/edit-account')}
            >
              Edit
            </Button>
          </div>
          <div>
            <span>Action notification: </span>
            <Button onClick={() => handleNotifySuccess()}>Success</Button>
            <Button onClick={() => handleNotifyInfo()}>Info</Button>
            <Button onClick={() => handleNotifyWarning()}>Warning</Button>
            <Button onClick={() => handleNotifyFail()}>Fail</Button>
          </div>
          <div>
            <span>Action message: </span>
            <Button onClick={() => handleMessageSuccess()}>Success</Button>
            <Button onClick={() => handleMessageInfo()}>Info</Button>
            <Button onClick={() => handleMessageWarning()}>Warning</Button>
            <Button onClick={() => handleMessageOpen()}>Open</Button>
            <Button onClick={() => handleMessageError()}>Error</Button>
            <Button onClick={() => handleMessageLoading()}>Loading</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AccountManagement;
