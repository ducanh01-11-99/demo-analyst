import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  RightHeader,
  IconUser,
  PopoverCustom,
} from './style';
import iconAvatarDefault from '../../../../images/icons/avatarDefault.svg';
import LanguageProvider from '../LanguageProviderFlag';
import BreadcrumbComponent from '../../../../shared/components/Breadcrumb';
import ThemeProvider from '../../../../shared/components/ThemeProvider';

const Header = ({
  userData,
  content,
  visible,
  onVisibleChange,
  breadcrumb,
  isExpand,
  hoverExpand,
}) => {
  const checkExpand = () => isExpand || hoverExpand;

  return (
    <HeaderEtn clickMenu={checkExpand()}>
      <ContainerHeader>
        <LeftHeader>
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
};

Header.propTypes = {
  userData: PropTypes.object,
  content: PropTypes.any,
  visible: PropTypes.any,
  onVisibleChange: PropTypes.any,
  breadcrumb: PropTypes.any,
  isExpand: PropTypes.bool,
  hoverExpand: PropTypes.bool,
};

export default Header;
