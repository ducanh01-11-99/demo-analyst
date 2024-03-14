import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  IconMenu,
  LogoFirst,
  RightHeader,
  IconUser,
  PopoverCustom,
} from './style';
import iconMenuDefault from '../../../images/icons/iconMenu.svg';
import iconLogoFirstDefault from '../../../images/temp_logo.png';
import iconAvatarDefault from '../../../images/icons/avatarDefault.svg';
import LanguageProvider from '../LanguageProviderFlag';

const Header = ({
  iconMenu,
  logo,
  userData,
  onClickMenu,
  onClickLogoFirst,
  content,
  visible,
  onVisibleChange,
}) => (
  <HeaderEtn>
    <ContainerHeader>
      <LeftHeader>
        <IconMenu
          alt=""
          onClick={onClickMenu || null}
          src={iconMenu || iconMenuDefault}
        />
        <LogoFirst
          alt=""
          onClick={onClickLogoFirst || null}
          src={logo || iconLogoFirstDefault}
        />
      </LeftHeader>
      <RightHeader>
        <LanguageProvider />
        <PopoverCustom
          placement="bottom"
          content={content}
          visible={visible}
          onVisibleChange={onVisibleChange}
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
  onClickLogoFirst: PropTypes.any,
  content: PropTypes.any,
  visible: PropTypes.any,
  onVisibleChange: PropTypes.any,
};

export default Header;
