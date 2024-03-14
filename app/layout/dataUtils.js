import { useTranslation } from 'react-i18next';
import iconDashboard from '../images/icons/dashboardMenu.svg';
import {
  ACCOUNT_SETTING_OPTION_ID,
  LOGOUT_OPTION_ID,
} from '../containers/App/constants';
import optionAccountSettingIcon from '../images/icons/optionAccountSetting.svg';
import optionLogoutIcon from '../images/icons/optionLogout.svg';

export function GetMenuPermission() {
  return [
    'p-home',
    'p-account',
    'p-account-manage',
    'p-account-add',
    'p-account-edit',
    'p-account-delete',
    'p-setting',
    'p-dashboard',
    'p-category',
    'p-demo',
    'p-text-to-voice',
    'p-ads-layout',
    'p-sidebar-full-layout',
  ];
}

export function GetDataMenu() {
  const { t } = useTranslation();
  return [
    {
      key: 'p-dashboard',
      path: '/dashboard',
      icon: iconDashboard,
      label: t('common.dashboard'),
    },
    {
      key: 'p-demo',
      icon: iconDashboard,
      label: t('common.demo'),
      child: [
        {
          key: 'p-text-to-voice',
          path: '/demo/text-to-voice',
          label: t('common.textToVoice'),
        },
        {
          key: 'p-ads-layout',
          path: '/demo/ads-layout',
          label: t('common.adsLayout'),
        },
        {
          key: 'p-sidebar-full-layout',
          path: '/demo/sidebar-full',
          label: t('common.sidebarFull'),
        },
      ],
    },
    {
      key: 'p-category',
      icon: iconDashboard,
      label: t('common.category'),
      child: [
        {
          key: 'p-account-manage',
          path: '/category/account-manage',
          label: t('common.accountManagement'),
        },
        {
          key: 'p-setting',
          path: '/category/setting',
          label: t('common.setting'),
        },
      ],
    },
  ];
}

export function GetOptionList() {
  const { t } = useTranslation();
  return [
    {
      id: ACCOUNT_SETTING_OPTION_ID,
      icon: optionAccountSettingIcon,
      label: t('common.settingAccountOption'),
    },
    {
      id: LOGOUT_OPTION_ID,
      icon: optionLogoutIcon,
      label: t('common.logoutOption'),
    },
  ];
}
