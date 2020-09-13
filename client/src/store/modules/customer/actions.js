/** @format */

import Axios from 'axios';
import {path, customerPath} from '@/constands.js';

const actions = {
  async getCustomer({commit}) {
    const {data} = await Axios({
      method: 'get',
      url: `${customerPath}${path.GET_CUSTOMER}`,
    });
    commit(
      'setCustomerList',
      data.map((customerList) => customerList)
    );
  },

  async createCustomer({dispatch}, {firstName, lastName, phone}) {
    await Axios({
      method: 'post',
      url: `${customerPath}${path.CREATE_CUSTOMER}`,
      data: {
        first_name: firstName,
        last_name: lastName,
        tel_no: phone,
      },
    });
    dispatch('getCustomer');
  },

  async deleteCustomer({dispatch}, {customer_id}) {
    await Axios({
      method: 'post',
      url: `${customerPath}${path.DELETE_CUSTOMER}`,
      data: {
        customer_id,
      },
    });
    dispatch('getCustomer');
  },

  async updateCustomer({dispatch}, {customer_id, firstName, lastName, phone}) {
    await Axios({
      method: 'post',
      url: `${customerPath}${path.UPDATE_CUSTOMER}`,
      data: {
        customer_id,
        first_name: firstName,
        last_name: lastName,
        tel_no: phone,
      },
    });
    dispatch('getCustomer');
  },
};

export default actions;
