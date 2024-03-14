import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {
  GetDataMenu,
  GetOptionList,
  GetMenuPermission,
} from 'layout/dataUtils';
import iconLogo from 'images/temp_logo.png';
import iconMenu from '../../images/icons/iconMenu.svg';
import Header from './components/Header';
import {
  ACCOUNT_SETTING_OPTION_ID,
  LOGOUT_OPTION_ID,
} from '../../containers/App/constants';
import avatarDefault from '../../images/icons/avatarDefault.svg';
import { COOKIES } from '../../utils/constants';
import { logOut } from '../../shared/commonFunction';
import Sidebar from './components/Sidebar';
// eslint-disable-next-line import/named

const { Content } = Layout;

export default function SystemLayout({ children, breadcrumb, contextHolder }) {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const [menuExpand, setMenuExpand] = useState(true);
  const navigate = useNavigate();
  const token = Cookies.get(COOKIES.accessToken);
  const location = useLocation();
  const { pathname } = location;
  if (!token) return <Navigate to="/login" />;

  const USER_DATA = {
    image: avatarDefault,
    name: Cookies.get(COOKIES.username),
    email: Cookies.get(COOKIES.email),
  };

  const menuData = GetDataMenu();

  const optionLists = GetOptionList();

  const menuPermission = GetMenuPermission();

  const handleClickOptionInformation = data => {
    switch (data.id) {
      case ACCOUNT_SETTING_OPTION_ID:
        break;
      case LOGOUT_OPTION_ID:
        logOut();
        break;
      default:
        break;
    }
  };

  return (
    <Layout style={{ height: '100%', overflowY: 'hidden' }}>
      <Header
        iconMenu={iconMenu}
        logo={iconLogo}
        userData={USER_DATA}
        optionList={optionLists}
        onClickMenu={() => setMenuExpand(!menuExpand)}
        onClickLogo={() => navigate('/')}
        onClickOptionInformation={handleClickOptionInformation}
        breadcrumb={breadcrumb}
      />
      {contextHolder}
      <Layout style={{ backgroundColor: 'white' }}>
        <Sidebar
          isExpand={menuExpand}
          minWidth="64px"
          maxWidth="300px"
          permissionArray={menuPermission}
          dataMenu={menuData}
          pathname={pathname}
          onClickMenu={data => navigate(data)}
        />
        <Content style={{ marginTop: '48px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

SystemLayout.propTypes = {
  children: PropTypes.object,
  breadcrumb: PropTypes.array,
  contextHolder: PropTypes.any,
};
