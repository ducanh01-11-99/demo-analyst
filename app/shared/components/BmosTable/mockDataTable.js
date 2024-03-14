import { formatFullDateTime } from '../../commonFunction';

export const IP = 'IP';
export const CREATE_DATE = 'CreateDate';
export const USER_ID = 'UserID';
export const LOG_CONTENT = 'LogContent';
export const PAGE_SIZE = 'PageSize';
export const OBJECT_GUID = 'ObjectGUID';
export const FORMAT_DATE_TIME = 'DD-MM-YYYY HH:mm';
export const FORMAT_TIME = 'HH:mm';

export const COLUMN_TABLE = t => [
  {
    title: t('examplePage.table.objectGUID'),
    dataIndex: [OBJECT_GUID],
    width: '15%',
  },
  {
    title: t('examplePage.table.ip'),
    dataIndex: [IP],
    width: '7%',
    align: 'center',
  },
  {
    title: t('examplePage.table.time'),
    dataIndex: [CREATE_DATE],
    width: '13%',
    render: time => formatFullDateTime(time, FORMAT_DATE_TIME),
  },
  {
    title: t('examplePage.table.processBy'),
    dataIndex: [USER_ID],
    width: '13%',
  },
  {
    title: t('examplePage.table.content'),
    dataIndex: [LOG_CONTENT],
    width: '42%',
  },
];

export const DATA_SOURCE = [
  {
    ObjectGUID: 'Test',
    IP: '192.168.0.1',
    CreateDate: '1680171494077',
    UserID: '19879461264',
    LogContent: ' dniagdagdiawhfklahfo',
  },
  {
    ObjectGUID: 'Test',
    IP: '192.168.0.1',
    CreateDate: '1680171494077',
    UserID: '19879461264',
    LogContent: ' dniagdagdiawhfklahfo',
  },
  {
    ObjectGUID: 'Test',
    IP: '192.168.0.1',
    CreateDate: '1680171494077',
    UserID: '19879461264',
    LogContent: ' dniagdagdiawhfklahfo',
  },
  {
    ObjectGUID: 'Test',
    IP: '192.168.0.1',
    CreateDate: '1680171494077',
    UserID: '19879461264',
    LogContent: ' dniagdagdiawhfklahfo',
  },
  {
    ObjectGUID: 'Test',
    IP: '192.168.0.1',
    CreateDate: '1680171494077',
    UserID: '19879461264',
    LogContent: ' dniagdagdiawhfklahfo',
  },
  {
    ObjectGUID: 'Test',
    IP: '192.168.0.1',
    CreateDate: '1680171494077',
    UserID: '19879461264',
    LogContent: ' dniagdagdiawhfklahfo',
  },
];
