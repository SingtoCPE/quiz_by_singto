<template>
  <v-navigation-drawer 
    v-model="openDrawer" 
    absolute
    left
    app
    dark  
    color="blue-grey darken-4"
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-list nav>
      <v-divider />

      <v-list-item class="pl-0 pr-1 mb-0" :to="{ name : 'dashboard' }">
        <v-col>
          <v-icon x-large>mdi-cannabis</v-icon>
        </v-col>
        <v-list-item-title class="pl-1">Dashboard</v-list-item-title>
      </v-list-item>
      <v-divider />

      <v-list-item class="pl-0 pr-1 mb-0" :to="{ name : 'customer' }">
        <v-col>
          <v-icon x-large>mdi-card-account-details-outline</v-icon>
        </v-col>
        <v-list-item-title class="pl-1">Customer</v-list-item-title>
      </v-list-item>
      <v-divider />

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "menuBar",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-dashboard" },
      { title: "About", icon: "mdi-question_answer" },
    ],
    openDrawer: true,
  }),
  computed: mapState({
    drawer: (state) => state.customer.drawer,
  }),
  watch: {
    drawer: {
      handler(val) {
        this.openDrawer = val;
      },
    },
  },
};
</script>
<style scoped>
#grad1 {
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #254547, #040708);
  background: linear-gradient(to right, #234749, #bdc3c7);
}
</style>