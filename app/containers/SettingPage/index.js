/**
 * ...
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet/es/Helmet';
import { Container } from '../../common.styles';

const SettingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Helmet title={t('common.setting')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>{t('common.setting')}</div>
      </Container>
    </>
  );
};

export default SettingPage;
