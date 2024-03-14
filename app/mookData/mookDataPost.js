const MOCKDATA_GET_LIST_PURCHASE_ORDER = [];
const MOCKDATA_GET_LIST_ORDER = [];

export const MOOK_DATA_POST = {
  '/products/3': {
    switch: false,
    data: {
      email: 'abc@gmail.com',
      name: 'Abc',
    },
  },
  '/message/4': {
    switch: true,
    data: {
      id: '123456',
      content: 'Abc Def',
    },
  },
  '/getListPurchaseOrder': {
    switch: true,
    data: MOCKDATA_GET_LIST_PURCHASE_ORDER,
  },
  '/getListOrder': {
    switch: true,
    data: MOCKDATA_GET_LIST_ORDER,
  },
};
