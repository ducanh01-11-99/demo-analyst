import React from 'react';
import PropTypes from 'prop-types';
import LanguageProvider from 'shared/components/LanguageProviderFlag';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  RightHeader,
  IconUser,
  PopoverCustom,
  Logo,
} from './style';
import iconLogoDefault from '../../../../images/temp_logo.png';
import iconAvatarDefault from '../../../../images/icons/avatarDefault.svg';
import Sidebar from '../Sidebar';
import ThemeProvider from '../../../../shared/components/ThemeProvider';

const Header = ({
  logo,
  userData,
  onClickLogo,
  content,
  visible,
  onVisibleChange,
  permissionArray,
  dataMenu,
  onClickMenu,
  pathname,
}) => (
  <HeaderEtn>
    <ContainerHeader>
      <LeftHeader>
        <Logo
          alt=""
          onClick={onClickLogo || null}
          src={logo || iconLogoDefault}
        />
        <Sidebar
          permissionArray={permissionArray}
          dataMenu={dataMenu}
          onClickMenu={onClickMenu}
          pathname={pathname}
        />
      </LeftHeader>
      <RightHeader>
        <ThemeProvider />
        <LanguageProvider />
        <PopoverCustom
          placement="bottom"
          content={content}
          open={visible}
          onOpenChange={onVisibleChange}
          trigger="click"
          overlayStyle={{ paddingRight: '15px' }}
        >
          <IconUser alt="" src={userData.image || iconAvatarDefault} />
        </PopoverCustom>
      </RightHeader>
    </ContainerHeader>
  </HeaderEtn>
);

Header.propTypes = {
  logo: PropTypes.any,
  userData: PropTypes.object,
  onClickLogo: PropTypes.any,
  content: PropTypes.any,
  visible: PropTypes.any,
  onVisibleChange: PropTypes.any,
  permissionArray: PropTypes.array,
  dataMenu: PropTypes.array,
  onClickMenu: PropTypes.func,
  pathname: PropTypes.string,
};

export default Header;
