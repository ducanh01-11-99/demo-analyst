import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  IconMenu,
  RightHeader,
  IconUser,
  PopoverCustom,
  Logo,
} from './style';
import iconMenuDefault from '../../../../images/icons/iconMenu.svg';
import iconLogoDefault from '../../../../images/temp_logo.png';
import iconAvatarDefault from '../../../../images/icons/avatarDefault.svg';
import LanguageProvider from '../LanguageProviderFlag';
import BreadcrumbComponent from '../../../../shared/components/Breadcrumb';
import ThemeProvider from '../../../../shared/components/ThemeProvider';

const Header = ({
  iconMenu,
  logo,
  userData,
  onClickMenu,
  onClickLogo,
  content,
  visible,
  onVisibleChange,
  breadcrumb,
}) => (
  <HeaderEtn>
    <ContainerHeader>
      <LeftHeader>
        <IconMenu
          alt=""
          onClick={onClickMenu || null}
          src={iconMenu || iconMenuDefault}
        />
        <Logo
          alt=""
          onClick={onClickLogo || null}
          src={logo || iconLogoDefault}
        />
        <BreadcrumbComponent routes={breadcrumb} />
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
  iconMenu: PropTypes.any,
  logo: PropTypes.any,
  userData: PropTypes.object,
  onClickMenu: PropTypes.any,
  onClickLogo: PropTypes.any,
  content: PropTypes.any,
  visible: PropTypes.any,
  onVisibleChange: PropTypes.any,
  breadcrumb: PropTypes.any,
};

export default Header;
