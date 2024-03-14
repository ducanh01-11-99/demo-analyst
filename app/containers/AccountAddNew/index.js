/**
 * ...
 */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet/es/Helmet';
import { useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { Container } from '../../common.styles';
import saga from './saga';
import { callApi } from './actions';

const key = 'huynqn-abc';
const AccountAddNew = () => {
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('addd acc');
    dispatch(callApi());
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Helmet title={t('common.addNewAccount')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>{t('common.addNewAccount')}</div>
      </Container>

      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <div>huynqn</div>
      </div>
    </>
  );
};

export default AccountAddNew;
