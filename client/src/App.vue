<!-- @format -->

<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import store from './store';

export default {
  name: 'App',
  store,
};
</script>
