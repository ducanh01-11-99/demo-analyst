/**
 * ...
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet/es/Helmet';
import { Container } from '../../common.styles';

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Helmet title={t('common.dashboard')}>
          <meta name="description" content="AI Event Management System" />
        </Helmet>
        <div>{t('common.dashboard')}</div>
        <ul>
          <li style={{ fontFamily: 'Roboto-Black' }}>Roboto-Black</li>
          <li style={{ fontFamily: 'Roboto-BlackItalic' }}>
            Roboto-BlackItalic
          </li>
          <li style={{ fontFamily: 'Roboto-Bold' }}>Roboto-Bold</li>
          <li style={{ fontFamily: 'Roboto-BoldItalic' }}>Roboto-BoldItalic</li>
          <li style={{ fontFamily: 'Roboto-Medium' }}>Roboto-Medium</li>
          <li style={{ fontFamily: 'Roboto-MediumItalic' }}>
            Roboto-MediumItalic
          </li>
          <li style={{ fontFamily: 'Roboto-Regular' }}>Roboto-Regular</li>
          <li style={{ fontFamily: 'Roboto-Italic' }}>Roboto-Italic</li>
          <li style={{ fontFamily: 'Roboto-Light' }}>Roboto-Light</li>
          <li style={{ fontFamily: 'Roboto-LightItalic' }}>
            Roboto-LightItalic
          </li>
          <li style={{ fontFamily: 'Roboto-Thin' }}>Roboto-Thin</li>
          <li style={{ fontFamily: 'Roboto-ThinItalic' }}>Roboto-ThinItalic</li>
        </ul>
      </Container>
    </>
  );
};

export default DashboardPage;
