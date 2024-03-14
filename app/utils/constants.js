export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const LOGIN_API_URL = 'https://apiedl.kos.com/Api/User/Login';

export const THEME = {
  dark: 'dark',
  light: 'light',
};

export const COOKIES = {
  accessToken: 'access_token',
  email: 'email',
  userId: 'user_id',
  username: 'username',
  refreshToken: 'refresh_token',
};

export const REDUX_KEY = {
  homePage: 'homePage',
  login: 'login',
  forgetPassword: 'forgetPassword',
  accountManagement: 'accountManagement',
  purchaseOrderManagement: 'purchaseOrderManagement',
  customerManagement: 'customerManagement',
  orderManagement: 'orderManagement',
  debtManagement: 'debtManagement',
  config: 'config',
};

export const STATUS_CODE = {
  success: 200,
  authenticationError: 401,
};

export const BUTTON_FUNCTION_TYPE = {
  add: 'add',
  search: 'search',
  reset: 'reset',
  export: 'export',
  filter: 'filter',
};
export const PATHS = {
  LOGIN: '/login',
  HOME: '/',
  DASHBOARD: '/dashboard',
  CATEGORY: '/category',
  CATEGORY_SETTING: '/category/setting',
  CATEGORY_ACCOUNT_MANAGEMENT: '/category/account-manage',
  CATEGORY_ACCOUNT_MANAGEMENT_ADD: '/category/account-manage/add-new-account',
  CATEGORY_ACCOUNT_MANAGEMENT_EDIT: '/category/account-manage/edit-account',
  DEMO: '/demo',
  DEMO_TEXT_TO_VOICE: '/demo/text-to-voice',
  DEMO_ADS_LAYOUT: '/demo/ads-layout',
  DEMO_SIDEBAR_FULL_LAYOUT: '/demo/sidebar-full',
};

export const CODES = {
  LOGIN: '',
  HOME: '',
  DASHBOARD: 'p-dashboard',
  CATEGORY: '',
  CATEGORY_SETTING: 'p-setting',
  CATEGORY_ACCOUNT_MANAGEMENT: 'p-account-manage',
  CATEGORY_ACCOUNT_MANAGEMENT_ADD: 'p-account-add',
  CATEGORY_ACCOUNT_MANAGEMENT_EDIT: 'p-account-edit',
  DEMO: '',
  DEMO_TEXT_TO_VOICE: 'p-text-to-voice',
  DEMO_ADS_LAYOUT: 'p-ads-layout',
  DEMO_SIDEBAR_FULL_LAYOUT: 'p-sidebar-full-layout',
};
