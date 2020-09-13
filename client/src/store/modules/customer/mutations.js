/** @format */

const mutations = {
  setCustomerList(state, customerList) {
    state.customerList = customerList;
  },
  setCustomerItem(state, customerItem) {
    state.customerItem = customerItem;
  },
  setDrawer(state, drawer) {
    state.drawer = drawer;
  },
  setIsDialogAddCustomer(state, isDialogAddCustomer) {
    state.isDialogAddCustomer = isDialogAddCustomer;
  },
  setIsDialogUpdateCustomer(state, isDialogUpdateCustomer) {
    state.isDialogUpdateCustomer = isDialogUpdateCustomer;
  },
  setIsDialogAlert(state, isDialogAlert) {
    state.isDialogAlert = isDialogAlert;
  },
  setIdCustomerUpdate(state, idCustomerUpdate) {
    state.idCustomerUpdate = idCustomerUpdate;
  },
};

export default mutations;
