import { useTranslation } from 'react-i18next';
import SystemLayout from './layout/SystemLayout/loadable';
import SystemSidebarFullLayout from './layout/SystemSidebarFullLayout/loadable';
import NotFoundLayout from './layout/NotFoundLayout/loadable';
import AuthenticationLayout from './layout/AuthenticationLayout/loadable';
import AdsLayout from './layout/AdsLayout/loadable';
import AccountManagement from './containers/AccountManagement/loadable';
import AccountAddNew from './containers/AccountAddNew/loadable';
import AccountEdit from './containers/AccountEdit/loadable';
import SettingPage from './containers/SettingPage/loadable';
import NotFoundPage from './containers/NotFoundPage/loadable';
import Login from './containers/Login/loginLoadable';
import DashboardPage from './containers/DashboardPage/loadable';
import TextToVoice from './containers/TextToVoice/loadable';
import SidebarFullPage from './containers/SidebarFullPage/loadable';
import * as breadcrumb from './breadcrumb';
import { CODES, PATHS } from './utils/constants';

export default function GetRoutes() {
  const { t } = useTranslation();
  return [
    {
      name: t('common.login'),
      path: PATHS.LOGIN,
      exact: true,
      layout: AuthenticationLayout,
      component: Login,
      breadcrumb: '',
      code: CODES.LOGIN,
      redirect: '',
    },
    {
      name: t('common.home'),
      path: PATHS.HOME,
      exact: true,
      redirect: PATHS.DASHBOARD,
    },
    {
      name: t('common.dashboard'),
      path: PATHS.DASHBOARD,
      exact: true,
      layout: AdsLayout,
      component: DashboardPage,
      breadcrumb: breadcrumb.dashboard,
      code: CODES.DASHBOARD,
    },
    {
      name: t('common.home'),
      path: PATHS.CATEGORY,
      exact: true,
      redirect: PATHS.CATEGORY_SETTING,
    },
    {
      name: t('common.setting'),
      path: PATHS.CATEGORY_SETTING,
      exact: true,
      layout: SystemLayout,
      component: SettingPage,
      breadcrumb: breadcrumb.settingPage,
      code: CODES.CATEGORY_SETTING,
      redirect: '',
    },
    {
      name: t('common.accountManagement'),
      path: PATHS.CATEGORY_ACCOUNT_MANAGEMENT,
      exact: true,
      layout: SystemLayout,
      component: AccountManagement,
      breadcrumb: breadcrumb.accountManagement,
      code: CODES.CATEGORY_ACCOUNT_MANAGEMENT,
      redirect: '',
    },
    {
      name: t('common.addNewAccount'),
      path: PATHS.CATEGORY_ACCOUNT_MANAGEMENT_ADD,
      exact: true,
      layout: SystemLayout,
      component: AccountAddNew,
      breadcrumb: breadcrumb.addAccount,
      code: CODES.CATEGORY_ACCOUNT_MANAGEMENT_ADD,
      redirect: '',
    },
    {
      name: t('common.editNewAccount'),
      path: PATHS.CATEGORY_ACCOUNT_MANAGEMENT_EDIT,
      exact: true,
      layout: SystemLayout,
      component: AccountEdit,
      breadcrumb: breadcrumb.editAccount,
      code: CODES.CATEGORY_ACCOUNT_MANAGEMENT_EDIT,
      redirect: '',
    },
    {
      name: t('common.demo'),
      exact: true,
      path: PATHS.DEMO,
      redirect: PATHS.DEMO_TEXT_TO_VOICE,
    },
    {
      name: t('common.textToVoice'),
      path: PATHS.DEMO_TEXT_TO_VOICE,
      exact: true,
      layout: SystemLayout,
      component: TextToVoice,
      breadcrumb: breadcrumb.textToVoice,
      code: CODES.DEMO_TEXT_TO_VOICE,
    },
    {
      name: t('common.adsLayout'),
      path: PATHS.DEMO_ADS_LAYOUT,
      exact: true,
      layout: AdsLayout,
      component: TextToVoice,
      breadcrumb: breadcrumb.textToVoice,
      code: CODES.DEMO_ADS_LAYOUT,
    },
    {
      name: t('common.sidebarFull'),
      path: PATHS.DEMO_SIDEBAR_FULL_LAYOUT,
      exact: true,
      layout: SystemSidebarFullLayout,
      component: SidebarFullPage,
      breadcrumb: breadcrumb.sidebarFullLayout,
      code: CODES.DEMO_SIDEBAR_FULL_LAYOUT,
    },
    {
      name: 'notfound',
      path: '*',
      layout: NotFoundLayout,
      component: NotFoundPage,
      code: 'notfound',
    },
  ];
}
