<!-- @format -->

<template>
  <v-dialog v-model="isDialogUpdateCustomer" width="650px" persistent :retain-focus="false">
    <validation-observer ref="customerForm">
      <form @submit.prevent="onSubmit">
        <v-card>
          <v-card-title class="blue-grey lighten-3 text-uppercase">Create Customer List</v-card-title>
          <v-card-subtitle class="mt-3">
            Customer information
            <v-divider />
          </v-card-subtitle>

          <v-card-text>
            <customer-form
              v-if="isDialogUpdateCustomer"
              :customer-item="customerItemInput"
              @customer-input-change="customerInputChange"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn name="close-button" color="red" dark @click="clearField">Close</v-btn>
            <v-btn id="add-button" color="primary" dark type="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </validation-observer>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";
import CustomerForm from "@/components/customer/CustomerForm.vue";

export default {
  name: "CustomerCreateContainer",
  components: {
    CustomerForm,
  },
  data: () => ({
    customerPayload: {},
    customerItemInput: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  }),
  computed: mapState({
    isDialogUpdateCustomer: (state) => state.customer.isDialogUpdateCustomer,
    idCustomerUpdate: (state) => state.customer.idCustomerUpdate,
    customerItem: (state) => state.customer.customerItem,
  }),
  watch: {
    isDialogUpdateCustomer: {
      handler(value) {
        if (value) {
          this.setInput();
        }
      },
      immediate: true,
    },
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.customerForm.validate();
      if (isValid) {
        this.updateCustomer();
        this.clearField();
      }
    },
    setCustomerItem() {
      this.customerPayload = {
        ...this.customerPayload,
        customer_id: this.idCustomerUpdate,
      };
    },
    customerInputChange(customer) {
      this.customerPayload = customer;
    },
    updateCustomer() {
      this.setCustomerItem();
      this.$store.dispatch("customer/updateCustomer", this.customerPayload);
    },
    setInput() {
      if (this.customerItem) {
        this.customerItemInput.firstName = this.customerItem.first_name;
        this.customerItemInput.lastName = this.customerItem.last_name;
        this.customerItemInput.phone = this.customerItem.tel_no;
      }
    },
    clearField() {
      this.clearValidate();
      this.closeCustomerDialog();
    },
    clearValidate() {
      this.$refs.customerForm.reset();
    },
    closeCustomerDialog() {
      this.$store.commit("customer/setIsDialogUpdateCustomer", false);
    },
  },
};
</script>
