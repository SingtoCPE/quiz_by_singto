<template>
  <v-data-table
    :headers="headers"
    :items="customerList"
    class="elevation-1"
    item-key="id"
  >
    <template v-slot:top>
      <customer-header />
    </template>

    <template v-slot:body="{ items }">
      <customer-table-body :items="items" />
    </template>
  </v-data-table>
</template>
<script>
import { mapState } from 'vuex';
import CustomerHeader from '@/components/customer/CustomerHeader.vue';
import CustomerTableBody from '@/components/customer/CustomerTableBody.vue';

export default {
  name: 'CustomerTable',
  components: { CustomerHeader, CustomerTableBody },
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
          class: 'grey lighten-3',
        },
        {
          text: 'First Name',
          align: 'left',
          sortable: false,
          value: 'first_name',
          class: 'grey lighten-3',
        },
        {
          text: 'Last Name',
          align: 'left',
          sortable: false,
          value: 'last_name',
          class: 'grey lighten-3',
        },
        {
          text: 'Phone',
          align: 'left',
          sortable: false,
          value: 'tel_no',
          class: 'grey lighten-3',
        },
        {
          text: 'Actions',
          align: 'left',
          sortable: false,
          class: 'grey lighten-3',
        },
      ],
    };
  },
  computed: mapState({
    customerList: state => state.customer.customerList,
  }),
};
</script>