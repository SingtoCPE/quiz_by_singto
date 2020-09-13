<template>
  <tbody>
    <tr v-for="(item, index) in items" :key="item.customer_id">
      <td>{{ index+1 }}</td>
      <td>{{ item.first_name }}</td>
      <td>{{ item.last_name }}</td>
      <td>{{ item.tel_no }}</td>
      <td>
        <v-btn icon>
          <v-menu offset-y left>
            <template v-slot:activator="{ on }">
              <v-btn id="options-menu" icon v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list width="120" dense>
              <list-item-slot
                list-text="UPDATE"
                add-color="green lighten-3"
                @click="openDialogUpdate(item.customer_id)"
              />
              <list-item-slot
                list-text="DELETE"
                add-color="red lighten-3"
                @click="openDialogDelete(item.customer_id)"
              />
            </v-list>
          </v-menu>
        </v-btn>
      </td>
    </tr>
    <alert-slot :id-customer="idCustomer" />
  </tbody>
</template>

<script>
import { mapState } from "vuex";
import ListItemSlot from "@/components/slot/ListItemSlot.vue";
import AlertSlot from "@/components/slot/AlertSlot.vue";

export default {
  name: "CustomerTableBody",
  components: { ListItemSlot, AlertSlot },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    idCustomer: null,
    customerItem: "",
  }),
  computed: mapState({
    customerList: (state) => state.customer.customerList,
  }),
  methods: {
    openDialogDelete(customer_id) {
      this.idCustomer = customer_id;
      this.$store.commit("customer/setIsDialogAlert", true);
    },
    openDialogUpdate(customer_id) {
      this.idCustomer = customer_id;
      this.customerItem = this.customerList.find(
        (customerItem) => customerItem.customer_id === customer_id
      );
      this.$store.commit("customer/setIdCustomerUpdate", customer_id);
      this.$store.commit("customer/setCustomerItem", this.customerItem);
      this.$store.commit("customer/setIsDialogUpdateCustomer", true);
    },
  },
};
</script>