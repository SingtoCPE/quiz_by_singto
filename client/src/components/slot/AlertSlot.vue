<template>
  <v-dialog v-model="isDialogAlert" width="300px" persistent>
    <v-card>
      <v-card-title class="headline">Do you want to Delete ?</v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn dark color="red" @click="cancelDialog">Cancel</v-btn>
        <v-btn dark color="blue" @click="confirmDelete">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "AlertSlot",
  props: {
    idCustomer: {
      type: Number,
      default: 0,
    },
  },
  computed: mapState({
    isDialogAlert: (state) => state.customer.isDialogAlert,
  }),
  methods: {
    confirmDelete() {
      this.$store.dispatch("customer/deleteCustomer", {
        customer_id: this.idCustomer,
      });
      this.cancelDialog();
    },
    cancelDialog() {
      this.$store.commit("customer/setIsDialogAlert", false);
    },
  },
};
</script>