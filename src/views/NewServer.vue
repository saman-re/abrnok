<template>
  <div>
    <v-navigation-drawer app v-model="navDrawer" clipped width="75px">
      <h2>Hello</h2>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navDrawer: true,
    };
  },
};
</script>