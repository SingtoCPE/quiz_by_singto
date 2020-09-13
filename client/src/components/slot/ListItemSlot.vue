<template>
  <div class="my-1">
    <v-list-item link v-bind="$attrs" v-on="$listeners" :class="addColor" class="text-center">
      <v-list-item-title class="font-weight-bold">{{ listText }}</v-list-item-title>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "ListItemSlot",
  props: {
    listText: {
      type: String,
      default: "",
    },
    addColor: {
      type: String,
      default: "",
    },
  },
};
</script>