/**
 * ...
 */

import { REDUX_KEY } from 'utils/constants';
import { useTranslation } from 'react-i18next';

export const RESET_REDUX = `${REDUX_KEY.accountManagement}/RESET_REDUX`;
export const CALL_API = `huynqn/CALL_API`;

export const Trans = () => {
  const { t } = useTranslation();
  return [
    {
      name: t('routes.home'),
    },
    {
      name: t('routes.accountManagement'),
    },
  ];
};
