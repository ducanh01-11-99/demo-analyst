import React from 'react';
import { THEME } from 'utils/constants';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import IconDark from 'images/icons/dark.svg';
import IconLight from 'images/icons/light.svg';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../containers/App/actions';
import { StyledContentMode, StyledThemeProvider } from './styles';
import * as selectors from '../../../containers/App/selectors';

function ThemeProvider() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const themeApp = useSelector(selectors.selectTheme());
  return (
    <StyledThemeProvider
      style={{ lineHeight: '35px' }}
      onClick={() => {
        const temp = window.localStorage.getItem('theme') || THEME.light;
        window.localStorage.setItem(
          'theme',
          temp === THEME.dark ? THEME.light : THEME.dark,
        );
        dispatch(
          actions.changeTheme(temp === THEME.dark ? THEME.light : THEME.dark),
        );
      }}
    >
      <Tooltip title={t('common.theme')}>
        <StyledContentMode>
          <img
            src={themeApp.theme === THEME.dark ? IconLight : IconDark}
            alt="mode"
            style={{ paddingRight: 10 }}
          />
          {/* eslint-disable-next-line no-nested-ternary */}
          {themeApp.theme === THEME.dark
            ? t('common.themeDark')
            : t('common.themeLight')}
        </StyledContentMode>
      </Tooltip>
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
