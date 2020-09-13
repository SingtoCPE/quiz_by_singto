/** @format */

export const path = {
  GET_CUSTOMER: 'customer',
  CREATE_CUSTOMER: 'customer/create',
  UPDATE_CUSTOMER: 'customer/update',
  DELETE_CUSTOMER: 'customer/delete',
};
export const customerPath = `${process.env.VUE_APP_API_URL}/`;
export default {path, customerPath};
