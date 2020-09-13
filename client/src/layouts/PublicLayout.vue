<template>
  <div>
    <header-layout />
    <menu-bar-layout />
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>
<script>
import MenuBarLayout from '@/layouts/MenuBarLayout.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'

export default {
  name: 'PublicLayout',
  components: {
    MenuBarLayout,
    HeaderLayout
  }
  
}
</script>