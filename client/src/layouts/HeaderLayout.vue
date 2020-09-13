<template>
  <v-app-bar
      color="#43a047"
      dark
      src="https://picsum.photos/1920/1080?random"
      class="hidden-md-and-up"
      absolute 
      right
      v-if="$vuetify.breakpoint.mdAndDown"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon class="ml-0" @click="openMenubar"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <a href="https://www.godigit.net/">
          <img 
            src="https://www.godigit.net/wp-content/uploads/2019/11/godigit-logo-white-all--208x60.png" 
            width="150px"
          >
        </a>
      </v-toolbar-title>

      <v-spacer class="pt-2 text-center headline font-weight-light"
        ><span class="hidden-sm-and-down">Home Page</span></v-spacer
      >

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <span class="hidden-sm-and-down">
      <v-btn icon>TH</v-btn>
      <v-btn icon>EN</v-btn>
      </span>
    </v-app-bar>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderLayout',
 
  data: () => ({
    clickMenuBar: [],
  }),
  computed: mapState({
    drawer: state => state.customer.drawer,
  }),
  methods: {
     openMenubar(){
      if(this.drawer == true){
        this.$store.commit('customer/setDrawer', false);
      } else {
        this.$store.commit('customer/setDrawer', true);
      }
    }
  }
};
</script>
