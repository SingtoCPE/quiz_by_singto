<template>
  <div>
    <div>
    <v-divider />
    <v-card
      class="flex-column"
    >
      <v-card>
        <v-card-title>
          <v-icon left>
            mdi-card-account-details-outline
          </v-icon>Customer Info :
        </v-card-title>
        <v-divider/>
        <customer-table/>
      </v-card>
    </v-card>
  </div>
  </div>
</template>
<script>
import CustomerTable from '@/components/customer/CustomerTable.vue';

export default {
  name: 'DashboardPage',
  components: {
    CustomerTable
  },
  mounted() {
    this.$store.dispatch('customer/getCustomer');
  },
};
</script>