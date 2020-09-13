<!-- @format -->

<template>
  <v-dialog v-model="isDialogAddCustomer" width="650px" persistent :retain-focus="false">
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
              :is-clear-form="isClearForm"
              @customer-input-change="customerInputChange"
              @reset-isclear-form="resetIsclearForm"
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
    isClearForm: false,
  }),
  computed: mapState({
    isDialogAddCustomer: (state) => state.customer.isDialogAddCustomer,
  }),
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.customerForm.validate();
      if (isValid) {
        this.createCustomer();
        this.clearField();
      }
    },
    customerInputChange(customer) {
      this.customerPayload = customer;
    },
    createCustomer() {
      this.$store.dispatch("customer/createCustomer", this.customerPayload);
    },
    clearField() {
      this.clearValidate();
      this.closeCustomerDialog();
      this.isClearForm = true;
    },
    clearValidate() {
      this.$refs.customerForm.reset();
    },
    closeCustomerDialog() {
      this.$store.commit("customer/setIsDialogAddCustomer", false);
    },
    resetIsclearForm() {
      this.isClearForm = false;
    },
  },
};
</script>
