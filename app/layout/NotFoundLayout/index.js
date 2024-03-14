/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import iconLogoDefault from 'images/temp_logo.png';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const { Header, Content } = Layout;

const Wrapper = styled.div`
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  background: ${props => props.theme.background.primary};
  border: ${props => `1px solid ${props.theme.border.primary}`};
`;

const StyledContent = styled(Content)`
  background: #fff;
`;

const BackMain = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonBackHome = styled.button`
  background: transparent;
  outline: none;
  border: 1px solid ${props => props.theme.colors.borderDefault};
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const NotFoundLayout = ({ children }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Layout>
      <StyledHeader>
        <img src={iconLogoDefault} onClick={() => navigate('/')} alt="Logo" />
      </StyledHeader>
      <StyledContent>
        <Wrapper>{children}</Wrapper>
        <BackMain>
          <ButtonBackHome onClick={() => navigate('/')}>
            {t('common.backToHome')}
          </ButtonBackHome>
        </BackMain>
      </StyledContent>
    </Layout>
  );
};
NotFoundLayout.propTypes = {
  children: PropTypes.any,
};

export default NotFoundLayout;
