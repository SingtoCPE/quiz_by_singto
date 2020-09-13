<template>
  <v-card
    class="d-flex justify-end ma-2 ml-6"
    color="white"
    height="43"
    outlined
  >
    <v-card-actions>
      <v-btn
        id="new-button"
        color="grey lighten-1"
        width="115px"
        @click="openDialog"
      >
        <v-icon small>
          mdi-plus
        </v-icon>New
      </v-btn>
    </v-card-actions>
    <customer-create-container />
    <customer-update-container />
  </v-card>
</template>
<script>
import CustomerCreateContainer from '@/container/CustomerCreateContainer.vue';
import CustomerUpdateContainer from '@/container/CustomerUpdateContainer.vue';

export default {
  name: 'CustomerHeader',
  components: { CustomerCreateContainer, CustomerUpdateContainer },
   methods: {
    openDialog() {
      this.$store.commit('customer/setIsDialogAddCustomer', true);
    },
  },
};
</script>
