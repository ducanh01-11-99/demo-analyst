export const dashboard = [
  {
    path: '/dashboard',
    breadcrumbName: 'Dashboard',
    keyName: 'common.dashboard',
  },
];

export const category = [
  {
    path: '/category',
    breadcrumbName: 'Category',
    keyName: 'common.category',
  },
];

export const settingPage = category.concat([
  {
    path: '/category/setting',
    breadcrumbName: 'Setting',
    keyName: 'common.setting',
  },
]);

export const accountManagement = category.concat([
  {
    path: '/account-manage',
    breadcrumbName: 'Account Management',
    keyName: 'common.accountManagement',
  },
]);

export const addAccount = accountManagement.concat([
  {
    path: '/add-new-account',
    breadcrumbName: 'Add Account',
    keyName: 'common.addNewAccount',
  },
]);

export const editAccount = accountManagement.concat([
  {
    path: '/edit-new-account',
    breadcrumbName: 'Add Account',
    keyName: 'common.addNewAccount',
  },
]);

export const demo = [
  {
    path: '/demo',
    breadcrumbName: 'Demo',
    keyName: 'common.demo',
  },
];

export const textToVoice = demo.concat([
  {
    path: '/text-to-voice',
    breadcrumbName: 'Text to voice',
    keyName: 'common.textToVoice',
  },
]);

export const sidebarFullLayout = demo.concat([
  {
    path: '/sidebar-full',
    breadcrumbName: 'Sidebar Full layout',
    keyName: 'common.sidebarFull',
  },
]);

export const testHeader = demo.concat([
  {
    path: '/header',
    breadcrumbName: 'Test Header',
    keyName: 'common.header',
  },
]);
