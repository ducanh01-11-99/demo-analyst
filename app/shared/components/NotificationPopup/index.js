import { notification } from 'antd';

export const NotificationPopup = (message, type) => {
  notification[type.type]({
    key: message,
    message,
    className: 'custom-class',
    style: {
      width: 'max-width',
      borderRadius: '8px',
      color: type.color,
      padding: '30 10px',
      border: '1px solid #44AA21',
    },
    placement: 'bottomRight',
  });
};
