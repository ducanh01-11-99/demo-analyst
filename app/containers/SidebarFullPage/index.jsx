/**
 * ...
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet/es/Helmet';
import { Container } from '../../common.styles';

const SidebarFullPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Helmet title={t('common.sidebarFull')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>{t('common.sidebarFull')}</div>
      </Container>
    </>
  );
};

export default SidebarFullPage;
