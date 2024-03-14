/**
 * ...
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet/es/Helmet';
import { Container } from '../../common.styles';

const AccountEdit = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Helmet title={t('common.editNewAccount')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>{t('common.editNewAccount')}</div>
      </Container>
    </>
  );
};

export default AccountEdit;
